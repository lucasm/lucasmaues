import React from 'react'
import Style from './Banners.module.css'
import { IconMoney, IconShield } from '../../Svgs'

interface BannerProps {
  link: string
  external: boolean
  title: string
  subtitle: string
  image: JSX.Element
}

export default function Banners() {
  const banners = [
    {
      link: '#',
      external: false,
      title: 'Compre com segurança',
      subtitle:
        'Todos os produtos tem garantia nas lojas Amazon, Mercado Livre ou AliExpress. Além disso, são os mais bem avaliados.',
      image: <IconShield />,
    },
    {
      link: 'https://www.meliuz.com.br/i/ref_lucasmauess?ref_source=2',
      external: true,
      title: 'Ganhe  R$ 5,00 *',
      subtitle: 'Ative o Méliuz e ganhe R$ 5,00 de volta na sua próxima compra online.',
      image: <IconMoney />,
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
