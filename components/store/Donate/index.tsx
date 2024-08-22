import styles from './Donate.module.css'
import Button from '../../Button'
import { IconCupom, IconGift, IconShield } from '../../Svgs'

const Donate = () => {
  return (
    <div className={styles.container}>
      <Button url="#banner">
        <>
          <IconShield />
          Compra 100% segura
        </>
      </Button>

      <Button url="#products">
        <>
          <IconCupom />
          Cupons de desconto
        </>
      </Button>

      <Button url="https://www.meliuz.com.br/i/ref_lucasmauess" isExternal>
        <>
          <IconGift />
          Ganhe R$ 5 no Méliuz
        </>
      </Button>
    </div>
  )
}

export default Donate
