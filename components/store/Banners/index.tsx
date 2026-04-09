import { ReactElement } from 'react'
import { IconGift, IconShield } from '../../Svgs'
import Style from './Banners.module.css'

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
      title: 'Compras seguras',
      subtitle:
        'Todos os produtos com garantia, bem avaliados e entregues pelas lojas Mercado Livre, Amazon ou AliExpress.',
      image: <IconShield />,
    },
    {
      link: 'https://www.meliuz.com.br/i/ref_lucasmauess',
      external: true,
      title: 'Receba R$ 5,00',
      subtitle:
        'Ainda não recebe dinheiro de volta? Ative o Méliuz e ganhe cashback nas compras online!',
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
