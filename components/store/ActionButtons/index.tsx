import styles from './ActionButtons.module.css'
import Button from '../../Button'
import { IconCupom, IconGift, IconShield } from '../../Svgs'

const ActionButtons = () => {
  return (
    <div className={styles.container}>
      <Button url="#banner">
        <>
          <IconShield />
          Seguro
        </>
      </Button>

      <Button url="#products">
        <>
          <IconCupom />
          Descontos
        </>
      </Button>

      <Button url="https://www.meliuz.com.br/i/ref_lucasmauess" isExternal>
        <>
          <IconGift />
          Cashback
        </>
      </Button>
    </div>
  )
}

export default ActionButtons
