import aws4 from 'aws4'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Keywords } = req.query // Receber os parâmetros pela query da URL

  const serviceName = 'ProductAdvertisingAPI'
  const region = 'us-east-1'
  const accessKey = process.env.AMAZON_AWS_ACCESS_KEY
  const secretKey = process.env.AMAZON_AWS_SECRET_KEY

  const payload = {
    Keywords: Keywords,
    Resources: ['ItemInfo.Title', 'Images.Primary.Large'],
    PartnerTag: process.env.AMAZON_PARTNER_TAG,
    PartnerType: 'Associates',
    Marketplace: 'www.amazon.com.br',
    Operation: 'SearchItems',
  }

  const host = 'webservices.amazon.com.br'
  const uriPath = '/paapi5/searchitems'

  const options = {
    host: host,
    path: uriPath,
    service: serviceName,
    region: region,
    method: 'POST',
    headers: {
      'content-encoding': 'amz-1.0',
      'content-type': 'application/json; charset=utf-8',
      'x-amz-target':
        'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems',
    },
    body: JSON.stringify(payload),
  }

  aws4.sign(options, { accessKeyId: accessKey, secretAccessKey: secretKey })

  try {
    const response = await axios.post(`https://${host}${uriPath}`, payload, {
      headers: options.headers,
    })

    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error:', error)
    // Enviar uma resposta mais detalhada com a mensagem de erro
    res.status(500).json({
      error: error.message,
      response: error.response
        ? {
            status: error.response.status,
            data: error.response.data,
          }
        : null,
      // request: {
      //   url: `https://${host}${uriPath}`,
      //   headers: options.headers,
      //   body: options.body,
      // },
    })
  }
}
