import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const creatorId = process.env.PATREON_CREATOR_ID
  const accessToken = process.env.PATREON_ACCESS_TOKEN

  if (!creatorId || !accessToken) {
    return NextResponse.json(
      {
        error:
          'Creator ID or access token not configured in environment variables',
      },
      { status: 500 }
    )
  }

  const url = `https://www.patreon.com/api/oauth2/v2/campaigns?fields[campaign]=creation_name,is_charged_immediately,is_monthly,patron_count&include=tiers&fields[tier]=amount_cents,patron_count,remaining,user_limit,title`

  try {
    const getMemberInfo = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
      },
    })

    if (!getMemberInfo.ok) {
      const errorData = await getMemberInfo.json()
      return NextResponse.json(
        { error: 'Failed to fetch member info', details: errorData },
        { status: getMemberInfo.status }
      )
    }

    const memberData = await getMemberInfo.json()

    // Check if the `limit` query parameter is present
    const { searchParams } = new URL(request.url)
    if (searchParams.has('limit')) {
      const tiers = memberData.included || []

      // Filter tiers that have a `user_limit` and compare with `patron_count`
      const allTiersFull = tiers.every((tier: any) => {
        const { patron_count, user_limit } = tier.attributes
        return user_limit !== null ? patron_count === user_limit : true
      })

      return NextResponse.json({ allTiersFull }, { status: 200 })
    }

    // Return data without limit check if `limit` parameter is not present
    return NextResponse.json(memberData, { status: 200 })
  } catch (error) {
    console.error('Error fetching member info:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
