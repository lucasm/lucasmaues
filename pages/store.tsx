import { useRef, useState } from 'react'
import PageLayout from '../components/PageLayout'
import StyleCard from '../components/store/ProductCard/ProductCard.module.css'
import Banners from '../components/store/Banners'
import ProductPopup from '../components/store/ProductPopup'
import { productsBR } from '../data/productsBR'
import ProductCard from '../components/store/ProductCard'
import SearchFilter from '../components/store/SearchFilter'
import Donate from '../components/store/Donate'

export default function PageStore() {
  const title = 'Loja Dev'
  const image = 'https://lucasm.dev/share-store.png'
  const description = 'Os melhores produtos para programadores e amantes de tecnologia.'

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [category, setCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = productsBR.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category
    const matchesSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearchTerm
  })

  const containerProductsRef = useRef<HTMLDivElement>(null)

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
    if (containerProductsRef?.current) {
      containerProductsRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
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
        <div className="page">
          <h1>{title}</h1>
          <p>{description}</p>

          <Donate />

          <SearchFilter
            currentCategory={category}
            onCategoryChange={handleCategoryChange}
            onSearchChange={handleSearchChange}
          />

          <div className={StyleCard.container} ref={containerProductsRef}>
            <ul>
              {filteredProducts.map((product, index) => (
                <li key={index}>
                  <ProductCard product={product} handleOnClick={handleOpenProductPopup} />
                </li>
              ))}
            </ul>
          </div>

          {filteredProducts.length === 0 && <p className="noResults">Nenhum produto encontrado.</p>}

          <Banners />
        </div>
      </section>

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleCloseProductPopup} />
      )}
    </PageLayout>
  )
}
