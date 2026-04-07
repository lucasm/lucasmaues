'use client'

import PageWrapper from '@/components/PageWrapper'
import Banners from '@/components/store/Banners'
import ProductCard from '@/components/store/ProductCard'
import StyleCard from '@/components/store/ProductCard/ProductCard.module.css'
import ProductPopup from '@/components/store/ProductPopup'
import SearchFilter from '@/components/store/SearchFilter'
import { productsBR } from '@/data/productsBR'
import { ROUTES, STORE_FILTER_LABELS } from '@/routes/routes'
import { useMemo, useRef, useState } from 'react'

export default function StorePageClient() {
  const title = ROUTES.STORE.title
  const description = ROUTES.STORE.description
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [category, setCategory] = useState<string>(
    STORE_FILTER_LABELS.ALL_CATEGORIES
  )
  const [brand, setBrand] = useState<string>(STORE_FILTER_LABELS.ALL_BRANDS)
  const [searchTerm, setSearchTerm] = useState('')
  const containerProductsRef = useRef<HTMLDivElement>(null)

  const availableCategories = useMemo(() => {
    return Array.from(
      new Set(
        productsBR
          .map((product) => product.category)
          .filter((categoryName): categoryName is string =>
            Boolean(categoryName)
          )
      )
    ).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  }, [])

  const availableBrands = useMemo(() => {
    return Array.from(
      new Set(
        productsBR
          .map((product) => product.manufacturer)
          .filter((manufacturer): manufacturer is string =>
            Boolean(manufacturer)
          )
      )
    ).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  }, [])

  const filteredProducts = productsBR.filter((product) => {
    const matchesCategory =
      category === STORE_FILTER_LABELS.ALL_CATEGORIES ||
      product.category === category
    const matchesBrand =
      brand === STORE_FILTER_LABELS.ALL_BRANDS || product.manufacturer === brand
    const manufacturer = product.manufacturer || ''
    const matchesSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manufacturer.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesBrand && matchesSearchTerm
  })

  const isEmptySearch = useMemo(() => {
    return filteredProducts.length === 0
  }, [filteredProducts])

  const handleCategoryChange = (newCategory: string): void => {
    setCategory(newCategory)

    if (containerProductsRef.current) {
      containerProductsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
  }

  const handleOpenProductPopup = (product: any): void => {
    setSelectedProduct(product)
  }

  const handleCloseProductPopup = () => {
    setSelectedProduct(null)
  }

  return (
    <PageWrapper>
      <section>
        <div className="page">
          <div className="container">
            <h1>{title}</h1>
            <p className="description">{description}</p>

            <SearchFilter
              currentCategory={category}
              currentBrand={brand}
              categories={availableCategories}
              brands={availableBrands}
              onCategoryChange={handleCategoryChange}
              onBrandChange={setBrand}
              onSearchChange={handleSearchChange}
              isEmptySearch={isEmptySearch}
            />
          </div>

          {!isEmptySearch && (
            <div ref={containerProductsRef}>
              <ul className={StyleCard.container}>
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    product={product}
                    handleOnClick={handleOpenProductPopup}
                    key={index}
                  />
                ))}
              </ul>
            </div>
          )}

          <div id="banner" className="container">
            <Banners />
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={handleCloseProductPopup}
        />
      )}
    </PageWrapper>
  )
}
