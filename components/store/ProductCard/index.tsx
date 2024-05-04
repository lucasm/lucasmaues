import { truncateText } from '../../../utils/strings'

interface ProductCardProps {
  product: any
  handleOnClick: (product: any) => void
}

export default function ProductCard({ product, handleOnClick }: ProductCardProps) {
  return (
    <button onClick={() => handleOnClick(product)}>
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <span>{truncateText(product.description, 40)}</span>
      </div>
    </button>
  )
}
