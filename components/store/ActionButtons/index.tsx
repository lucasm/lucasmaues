import styles from './ActionButtons.module.css'
import Button from '../../Button'
import { IconCupom, IconFilter, IconGift, IconShield } from '../../Svgs'

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
          Pegar cupom
        </>
      </Button>

      <Button url="https://www.meliuz.com.br/i/ref_lucasmauess" isExternal>
        <>
          <IconGift />
          Ganhar R$ 5
        </>
      </Button>
    </div>
  )
}

export default ActionButtons
