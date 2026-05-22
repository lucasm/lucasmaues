import { IconVerified } from '@/components/Svgs'
import style from './ProductCard.module.css'

interface ProductCardProps {
  product: any
  handleOnClick: (product: any) => void
}

export default function ProductCard({
  product,
  handleOnClick,
}: ProductCardProps) {
  return (
    <li className={style.product}>
      <button onClick={() => handleOnClick(product)}>
        <figure>
          <img
            src={product.image}
            alt={'Fotografia do produto ' + product.title}
          />
          {product.topSale && (
            <span>
              <IconVerified />
            </span>
          )}
        </figure>
        {/* <p>{product.manufacturer}</p> */}
        <h2>{product.title}</h2>
      </button>
    </li>
  )
}
