import styles from './Donate.module.css'
import Button from '../../Button'
import { IconGift, IconShield } from '../../Svgs'

const Donate = () => {
  return (
    <div className={styles.container}>
      <Button url="#banner">
        <>
          <IconShield />
          100% seguro
        </>
      </Button>

      <Button url="https://www.meliuz.com.br/i/ref_lucasmauess" isExternal>
        <>
          <IconGift />
          Ganhe R$ 5,00
        </>
      </Button>
    </div>
  )
}

export default Donate
