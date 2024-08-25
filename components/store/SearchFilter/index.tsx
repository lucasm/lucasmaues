import { useRef, useState, useEffect, useCallback } from 'react'
import Style from './SearchFilter.module.css'
import { IconChevronDown, IconClose, IconSearch } from '../../Svgs'
import debounce from 'lodash/debounce'
import AmazonSearch from '../AmazonSearch'

interface SearchFilterProps {
  currentCategory: string
  onCategoryChange: (category: string) => void
  onSearchChange: (searchTerm: string) => void
  isEmptySearch: boolean
}

export default function SearchFilter({
  currentCategory,
  onCategoryChange,
  onSearchChange,
  isEmptySearch,
}: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isResetVisible, setIsResetVisible] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const refInput = useRef(null)

  const focusInput = () => {
    refInput?.current && refInput.current.focus()
  }
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value)
    setIsResetVisible(true) // Ativa o botão de reset
  }
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    onSearchChange(newSearchTerm)

    // Scrolla para o topo da página somente se houver um termo de busca
    if (newSearchTerm !== '' && window.scrollY > 200) {
      debouncedScrollToTop()
    } else {
      debouncedScrollToTop.cancel()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const debouncedScrollToTop = useCallback(
    debounce(() => {
      scrollToTop()
    }, 1000),
    []
  )

  const resetAll = () => {
    setSearchTerm('')
    onSearchChange('')
    onCategoryChange('Todos')
    setIsResetVisible(false) // Desativa o botão de reset
  }

  // Limpa o debounce ao desmontar o componente para evitar possíveis vazamentos de memória
  useEffect(() => {
    return () => {
      debouncedScrollToTop.cancel()
    }
  }, [debouncedScrollToTop])

  // Ativa o botão de reset se há uma categoria ou termo de busca
  useEffect(() => {
    if (currentCategory !== 'Todos' || searchTerm !== '') {
      setIsResetVisible(true)
    } else {
      setIsResetVisible(false)
    }
  }, [currentCategory, searchTerm])

  // Oculta o ícone de busca se há um termo de busca ou categoria
  useEffect(() => {
    if (searchTerm !== '' || currentCategory !== 'Todos') {
      setIsButtonVisible(false)
    } else {
      setIsButtonVisible(true)
    }
  }, [searchTerm, currentCategory])

  return (
    <div className={Style.container} id="products">
      <div className={Style.containerInput}>
        {/* Input busca */}
        <div className={Style.searchBar}>
          <input
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

          {/* Botão reset */}
          {isResetVisible && (
            <button
              className={Style.buttonClear}
              onClick={resetAll}
              aria-label="Limpar">
              <IconClose />
            </button>
          )}
        </div>

        {/* Select categorias */}
        {!isEmptySearch && (
          <div className={Style.dropdown}>
            <select
              value={currentCategory}
              onChange={handleCategoryChange}
              className={Style.select}>
              <option value="Todos">Todos</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Saúde">Saúde</option>
              <option value="Livros">Livros</option>
            </select>

            <IconChevronDown />
          </div>
        )}
      </div>

      {isEmptySearch && (
        <AmazonSearch keyword={searchTerm} onReset={resetAll} />
      )}
    </div>
  )
}
