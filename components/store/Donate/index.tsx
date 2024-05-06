import { IconHeart } from '../../Svgs'

const Donate = () => {
  return (
    <p>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          width: 'fit-content',
          margin: '1rem auto',
        }}
        href="https://www.paraquemdoar.com.br/?ref=lucasm.dev"
        target="_blank"
        rel="noopener noreferrer">
        <IconHeart />
        Doe para o Rio Grande do Sul
      </a>
    </p>
  )
}

export default Donate
