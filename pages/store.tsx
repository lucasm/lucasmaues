import { useRef, useState } from 'react'
import PageLayout from '../components/PageLayout'
import Style from '../styles/Store.module.css'
import Banners from '../components/store/Banners'
import { IconHeart } from '../components/Svgs'
import ProductPopup from '../components/store/ProductPopup'
import { truncateText } from '../utils/strings'
import { productsBR } from '../data/productsBR'

export default function PageStore() {
  const title = 'Loja Dev'
  const image = 'https://lucasm.dev/share-store.png'
  const description = 'Os melhores produtos para programadores e amantes de tecnologia.'

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [category, setCategory] = useState('Todos')

  const filteredProducts =
    category === 'Todos'
      ? productsBR
      : productsBR.filter((product) => product.category === category)

  const containerProductsRef = useRef<HTMLDivElement>(null)

  const handleClick = (category: string) => {
    setCategory(category)
    if (containerProductsRef?.current) {
      containerProductsRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOpenProductPopup = (product) => {
    setSelectedProduct(product)
  }
  const handleCloseProductPopup = () => {
    setSelectedProduct(null)
  }

  return (
    <PageLayout title={title} description={description} image={image}>
      <section>
        <div className="container page">
          {/* <figure className={Style.icon}>
            <IconHeart />
          </figure> */}
          <h1>{title}</h1>
          <p>{description}</p>

          <div className={Style.buttons}>
            <button
              onClick={() => handleClick('Todos')}
              className={category === 'Todos' ? Style.buttonActive : undefined}>
              Tudo
            </button>
            <button
              onClick={() => handleClick('Dispositivos')}
              className={category === 'Dispositivos' ? Style.buttonActive : undefined}>
              Dispositivos
            </button>
            <button
              onClick={() => handleClick('Acessórios')}
              className={category === 'Acessórios' ? Style.buttonActive : undefined}>
              Acessórios
            </button>
            <button
              onClick={() => handleClick('Livros')}
              className={category === 'Livros' ? Style.buttonActive : undefined}>
              Livros
            </button>
          </div>
        </div>

        <div className={Style.container} ref={containerProductsRef}>
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index}>
                <button onClick={() => handleOpenProductPopup(product)}>
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h2>{product.title}</h2>
                    <span>{truncateText(product.description, 40)}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div id="banner">
          <Banners />
        </div>
      </section>

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleCloseProductPopup} />
      )}
    </PageLayout>
  )
}
