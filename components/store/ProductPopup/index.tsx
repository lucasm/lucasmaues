import { useState, useEffect } from 'react'
import Style from './ProductPopup.module.css'
import { IconArrowExternal, IconClose, IconStar } from '../../Svgs'
import Button from '../../Button'
import DiscountCoupons from '../DiscountCoupons'

interface ProductPopupProps {
  product: {
    title: string
    stars: number
    description: string
    image: string
    url: string
    url_2: string
    url_3: string
    cupom: string[]
  }
  onClose: () => void
}

const ProductPopup = ({ product, onClose }: ProductPopupProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('removeScroll')
    } else {
      document.body.classList.remove('removeScroll')
    }
  }, [isVisible])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200) // Delay for CSS transition
  }

  return (
    <>
      {isVisible && (
        <div className={Style.popupOverlay} onClick={handleClose}>
          <div
            className={Style.popupContent}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            <button
              className={Style.closeButton}
              onClick={handleClose}
              aria-label="Fechar">
              <IconClose />
            </button>

            <div className={Style.productDetail}>
              <figure>
                {product?.stars && (
                  <div className={Style.stars}>
                    <IconStar />
                    <span>{product.stars}</span>
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.title}
                  className={Style.brilho}
                />
              </figure>
              <div>
                <h2>{product.title}</h2>

                <h3>Onde encontrar?</h3>

                <div className={Style.containerButtons}>
                  {product.url && (
                    <Button url={product.url} isExternal>
                      <>
                        Amazon
                        <IconArrowExternal />
                      </>
                    </Button>
                  )}
                  {product.url_2 && (
                    <Button url={product.url_2} isExternal>
                      <>
                        Mercado Livre
                        <IconArrowExternal />
                      </>
                    </Button>
                  )}
                  {product.url_3 && (
                    <Button url={product.url_3} isExternal>
                      <>
                        AliExpress
                        <IconArrowExternal />
                      </>
                    </Button>
                  )}
                </div>

                <h3>Meu review:</h3>

                <p>{product.description}</p>

                <DiscountCoupons coupons={product?.cupom} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductPopup
