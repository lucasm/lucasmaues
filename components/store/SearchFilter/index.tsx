import { useState } from 'react'
import Style from './SearchFilter.module.css'
import { IconClose, IconSearch } from '../../Svgs'

export default function SearchFilter({ currentCategory, onCategoryChange, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('')

  const clearInput = () => {
    setSearchTerm('')
    onSearchChange('')
  }

  const handleCategoryClick = (category) => {
    onCategoryChange(category)
  }

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value
    setSearchTerm(newSearchTerm)
    onSearchChange(newSearchTerm)
  }

  return (
    <div className={Style.filterContainer}>
      {/* Barra de busca */}
      <div className={Style.searchBar}>
        <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
          className={Style.searchInput}
        />
        <div className={Style.iconSearch}>
          <IconSearch />
        </div>

        {searchTerm && (
          <button className={Style.buttonClear} onClick={clearInput}>
            <IconClose />
          </button>
        )}
      </div>

      <div className={Style.buttons}>
        <button
          onClick={() => handleCategoryClick('Todos')}
          className={currentCategory === 'Todos' ? Style.buttonActive : undefined}>
          Tudo
        </button>
        <button
          onClick={() => handleCategoryClick('Dispositivos')}
          className={currentCategory === 'Dispositivos' ? Style.buttonActive : undefined}>
          Dispositivos
        </button>
        <button
          onClick={() => handleCategoryClick('Acessórios')}
          className={currentCategory === 'Acessórios' ? Style.buttonActive : undefined}>
          Acessórios
        </button>
        <button
          onClick={() => handleCategoryClick('Livros')}
          className={currentCategory === 'Livros' ? Style.buttonActive : undefined}>
          Livros
        </button>
      </div>
    </div>
  )
}
