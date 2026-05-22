import aws4 from 'aws4'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const Keywords = searchParams.get('Keywords')

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

    return NextResponse.json(response.data, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
        response:
          error instanceof Error && 'response' in error
            ? {
                status: (error as any).response?.status,
                data: (error as any).response?.data,
              }
            : null,
      },
      { status: 500 }
    )
  }
}
