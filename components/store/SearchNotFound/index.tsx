import style from './SearchNotFound.module.css'

interface SearchNotFoundProps {
  onReset: () => void
}

const SearchNotFound = ({ onReset }: SearchNotFoundProps) => {
  return (
    <div className={style.container}>
      <h2>Nenhum produto encontrado</h2>
      <button className="button" onClick={onReset}>
        Ver todos
      </button>
    </div>
  )
}

export default SearchNotFound
