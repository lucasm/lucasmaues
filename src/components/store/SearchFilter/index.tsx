'use client'

import { STORE_FILTER_LABELS } from '@/routes/routes'
import debounce from 'lodash/debounce'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { IconChevronDown, IconClose, IconSearch } from '../../Svgs'
import AmazonSearch from '../AmazonSearch'
import Style from './SearchFilter.module.css'

interface SearchFilterProps {
  currentCategory: string
  currentBrand: string
  categories: string[]
  brands: string[]
  onCategoryChange: (category: string) => void
  onBrandChange: (brand: string) => void
  onSearchChange: (searchTerm: string) => void
  isEmptySearch: boolean
}

export default function SearchFilter({
  currentCategory,
  currentBrand,
  categories,
  brands,
  onCategoryChange,
  onBrandChange,
  onSearchChange,
  isEmptySearch,
}: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isResetVisible, setIsResetVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const refInput = useRef<HTMLInputElement | null>(null)

  const focusInput = () => {
    refInput.current?.focus()
  }
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value)
    setIsResetVisible(true) // Ativa o botão de reset
  }

  const handleBrandChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onBrandChange(event.target.value)
    setIsResetVisible(true)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    onSearchChange(newSearchTerm)

    // Atualiza a URL sem navegar — mantém histórico limpo
    try {
      const url = new URL(window.location.href)
      if (newSearchTerm) {
        // Use /store so direct links like /store?q=... work on the server
        url.pathname = '/store'
        url.searchParams.set('q', newSearchTerm)
      } else {
        url.pathname = '/store'
        url.searchParams.delete('q')
      }
      window.history.replaceState(null, '', url.toString())
    } catch (e) {
      // ignore
    }

    // Scrolla para o topo da página somente se houver um termo de busca
    if (newSearchTerm !== '' && window.scrollY > 200) {
      debouncedScrollToTop()
    } else {
      debouncedScrollToTop.cancel()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 250, behavior: 'smooth' })
  }

  const debouncedScrollToTop = useCallback(
    debounce(() => {
      scrollToTop()
    }, 500),
    []
  )

  const resetAll = () => {
    setSearchTerm('')
    onSearchChange('')
    onCategoryChange(STORE_FILTER_LABELS.ALL_CATEGORIES)
    onBrandChange(STORE_FILTER_LABELS.ALL_BRANDS)
    setIsResetVisible(false) // Desativa o botão de reset

    // Remove query da URL
    try {
      const url = new URL(window.location.href)
      url.pathname = '/store'
      url.searchParams.delete('q')
      window.history.replaceState(null, '', url.toString())
    } catch (e) {
      // ignore
    }
  }

  // Limpa o debounce ao desmontar o componente para evitar possíveis vazamentos de memória
  useEffect(() => {
    return () => {
      debouncedScrollToTop.cancel()
    }
  }, [debouncedScrollToTop])

  // Ao montar, lê `q` da URL e popula o campo de busca
  useEffect(() => {
    try {
      const params = new URL(window.location.href).searchParams
      const q = params.get('q') || ''
      if (q) {
        setSearchTerm(q)
        onSearchChange(q)
        setIsResetVisible(true)
      }
    } catch (e) {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Ativa o botão de reset se há uma categoria ou termo de busca
  useEffect(() => {
    if (
      currentCategory !== STORE_FILTER_LABELS.ALL_CATEGORIES ||
      currentBrand !== STORE_FILTER_LABELS.ALL_BRANDS ||
      searchTerm !== ''
    ) {
      setIsResetVisible(true)
    } else {
      setIsResetVisible(false)
    }
  }, [currentBrand, currentCategory, searchTerm])

  // Oculta o ícone de busca se há um termo de busca ou categoria
  useEffect(() => {
    if (
      searchTerm !== '' ||
      currentCategory !== STORE_FILTER_LABELS.ALL_CATEGORIES ||
      currentBrand !== STORE_FILTER_LABELS.ALL_BRANDS
    ) {
      setIsButtonVisible(false)
    } else {
      setIsButtonVisible(true)
    }
  }, [searchTerm, currentBrand, currentCategory])

  return (
    <div className={Style.container} id="products">
      <div className={Style.containerSearchFilter}>
        <div className={Style.containerInput}>
          {/* Input busca */}
          <div className={Style.searchBar}>
            <input
              name="search"
              ref={refInput}
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearchChange}
              className={Style.searchInput}
            />

            {isButtonVisible && (
              <button
                className={Style.buttonSearch}
                onClick={focusInput}
                aria-label="Buscar">
                <IconSearch />
              </button>
            )}

            {isResetVisible && (
              <button
                className={Style.buttonClear}
                onClick={resetAll}
                aria-label="Limpar">
                <IconClose />
              </button>
            )}
          </div>
        </div>

        {!isEmptySearch && (
          <>
            {/* Categories */}
            <div className={Style.containerSelect}>
              <div
                className={`${Style.dropdown} ${currentCategory !== STORE_FILTER_LABELS.ALL_CATEGORIES ? Style.dropdownActive : ''}`}>
                <label htmlFor="category" className={Style.label}>
                  Selecione a categoria:
                </label>
                <select
                  translate="no"
                  value={currentCategory}
                  onChange={handleCategoryChange}
                  className={Style.select}
                  id="category">
                  <option value={STORE_FILTER_LABELS.ALL_CATEGORIES}>
                    {STORE_FILTER_LABELS.ALL_CATEGORIES}
                  </option>
                  {categories.map((categoryName) => (
                    <option key={categoryName} value={categoryName}>
                      {categoryName}
                    </option>
                  ))}
                </select>

                <IconChevronDown />
              </div>
            </div>

            {/* Brands */}
            <div className={Style.containerSelect}>
              <div
                className={`${Style.dropdown} ${currentBrand !== STORE_FILTER_LABELS.ALL_BRANDS ? Style.dropdownActive : ''}`}>
                <label htmlFor="brand" className={Style.label}>
                  Selecione a marca:
                </label>
                <select
                  translate="no"
                  value={currentBrand}
                  onChange={handleBrandChange}
                  className={Style.select}
                  id="brand">
                  <option value={STORE_FILTER_LABELS.ALL_BRANDS}>
                    {STORE_FILTER_LABELS.ALL_BRANDS}
                  </option>
                  {brands.map((brandName) => (
                    <option key={brandName} value={brandName}>
                      {brandName}
                    </option>
                  ))}
                </select>

                <IconChevronDown />
              </div>
            </div>
          </>
        )}
      </div>

      {isEmptySearch && (
        <AmazonSearch keyword={searchTerm} onReset={resetAll} />
      )}
    </div>
  )
}
