import { ReactElement } from 'react'
import Style from './Banners.module.css'
import { IconGift, IconShield } from '../../Svgs'

interface BannerProps {
  link: string
  external: boolean
  title: string
  subtitle: string
  image: ReactElement
}

export default function Banners() {
  const banners = [
    {
      link: '#products',
      external: false,
      title: 'Compra 100% segura',
      subtitle:
        'Produtos bem avaliados, com garantia e entregues pelas lojas Amazon, Mercado Livre ou AliExpress.',
      image: <IconShield />,
    },
    {
      link: 'https://www.meliuz.com.br/i/ref_lucasmauess',
      external: true,
      title: 'Receba R$ 5,00 de volta',
      subtitle:
        'Ainda não recebe dinheiro de volta nas compras online? Ative o Méliuz com minha indicação!',
      image: <IconGift />,
    },
  ]

  function Banner({ link, external, title, subtitle, image }: BannerProps) {
    return (
      <a
        href={link}
        target={external ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={Style.containerDiscount}>
        <figure>{image}</figure>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </a>
    )
  }

  return (
    <div className={Style.container}>
      {banners.map((banner, index) => (
        <Banner
          key={index}
          link={banner.link}
          external={banner.external}
          title={banner.title}
          subtitle={banner.subtitle}
          image={banner.image}
        />
      ))}
    </div>
  )
}
