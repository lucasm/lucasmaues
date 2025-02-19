import Button from '../../Button'
import style from './SearchNotFound.module.css'

interface SearchNotFoundProps {
  onReset: () => void
}

const SearchNotFound = ({ onReset }: SearchNotFoundProps) => {
  return (
    <div className={style.container}>
      <h2>Nenhum produto encontrado</h2>
      <Button onClick={onReset}>Ver todos</Button>
    </div>
  )
}

export default SearchNotFound
