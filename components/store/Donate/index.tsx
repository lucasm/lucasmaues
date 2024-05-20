import styles from './Donate.module.css'
import Button from '../../Button'
import { IconGift, IconHeart, IconShield } from '../../Svgs'

const Donate = () => {
  return (
    <div className={styles.container}>
      <Button url="#banner">
        <>
          <IconShield />
          Compra segura
        </>
      </Button>

      <Button
        url="https://emergencia.paraquemdoar.com.br/?ref=lucasmdev?utm_source=lucasmdev&utm_medium=lucasmdev&utm_campaign=lucasmdev"
        isExternal>
        <>
          <IconHeart />
          Ajude o RS
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
