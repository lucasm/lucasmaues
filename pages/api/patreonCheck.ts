import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Usando variáveis de ambiente para o creatorId e o accessToken
  const creatorId = process.env.PATREON_CREATOR_ID
  const accessToken = process.env.PATREON_ACCESS_TOKEN

  // Verificar se o creatorId e o accessToken foram fornecidos
  if (!creatorId || !accessToken) {
    return res.status(500).json({
      error:
        'Creator ID or access token not configured in environment variables',
    })
  }

  // Montar a URL da requisição
  const url = `https://www.patreon.com/api/oauth2/v2/campaigns?fields[campaign]=creation_name,is_charged_immediately,is_monthly,patron_count&include=tiers&fields[tier]=amount_cents,patron_count,remaining,user_limit,title`

  try {
    // Fazer a requisição para o endpoint do Patreon
    const getMemberInfo = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'user-agent':
          'Chrome: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
      },
    })

    if (!getMemberInfo.ok) {
      const errorData = await getMemberInfo.json()
      return res
        .status(getMemberInfo.status)
        .json({ error: 'Failed to fetch member info', details: errorData })
    }

    // Converter resposta para JSON
    const memberData = await getMemberInfo.json()

    // Verificar se a requisição contém o parâmetro `limit`
    if (req.query.limit) {
      const tiers = memberData.included || []

      // Filtrar os tiers que têm um `user_limit` e comparar com `patron_count`
      const allTiersFull = tiers.every((tier: any) => {
        const { patron_count, user_limit } = tier.attributes
        return user_limit !== null ? patron_count === user_limit : true
      })

      // Retornar a resposta com o valor booleano indicando se todos os tiers estão cheios
      return res.status(200).json({
        allTiersFull, // booleano indicando se todos os tiers estão completos
      })
    }

    // Retornar dados sem a verificação de limites se o parâmetro `limit` não estiver presente
    return res.status(200).json(memberData)
  } catch (error) {
    console.error('Error fetching member info:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
