import { useEffect } from 'react'
import { productsBR } from '../../../data/productsBR'

interface PrefetchProps {
  enabled: boolean
}

const PrefetchImages = ({ enabled }: PrefetchProps) => {
  useEffect(() => {
    if (enabled) {
      productsBR?.slice(0, 6).forEach((product) => {
        const img = new Image()
        img.src = product.image
      })
    }
  }, [enabled])

  return null
}

export default PrefetchImages
