import { useState, useEffect } from 'react'
import Style from './ProductPopup.module.css'

interface ProductPopupProps {
  product: {
    title: string
    description: string
    image: string
    url: string
    url_2: string
    url_3: string
  }
  onClose: () => void
}

const ProductPopup = ({ product, onClose }: ProductPopupProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    isVisible
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [isVisible])

  useEffect(() => {
    setIsVisible(true)
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200) // Delay for CSS transition
  }

  if (!isVisible) return null

  return (
    <div className={Style.popupOverlay} onClick={handleClose}>
      <div
        className={Style.popupContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        <button className={Style.closeButton} onClick={handleClose} aria-label="Close">
          ✕
        </button>

        <div className={Style.productDetail}>
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>

            <h3>Compre em ⭣</h3>

            <div>
              {product.url && (
                <a href={product.url} target="_blank" rel="noreferrer" className="button">
                  Amazon
                </a>
              )}
              {product.url_2 && (
                <a href={product.url_2} target="_blank" rel="noreferrer" className="button">
                  Mercado Livre
                </a>
              )}
              {product.url_3 && (
                <a href={product.url_3} target="_blank" rel="noreferrer" className="button">
                  AliExpress
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPopup
