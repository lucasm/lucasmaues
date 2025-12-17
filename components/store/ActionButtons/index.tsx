import styles from './ActionButtons.module.css'
import Button from '../../Button'
import { IconCupom, IconGift, IconShield } from '../../Svgs'

const ActionButtons = () => {
  return (
    <div className={styles.container}>
      <Button url="#banner">
        <>
          <IconShield />
          Compra segura
        </>
      </Button>

      <Button url="#products">
        <>
          <IconCupom />
          Pegar descontos
        </>
      </Button>

      <Button url="https://www.meliuz.com.br/i/ref_lucasmauess" isExternal>
        <>
          <IconGift />
          Receber R$ 5,00
        </>
      </Button>
    </div>
  )
}

export default ActionButtons
