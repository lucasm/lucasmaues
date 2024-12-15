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
        <img
          src={product.image}
          alt={'Fotografia do produto ' + product.title}
        />
        <h2>{product.title}</h2>
      </button>
    </li>
  )
}
