// pages/api/getData.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { productsBR } from '../../data/productsBR'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(productsBR)
}
