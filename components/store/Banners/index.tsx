import React from 'react'
import Style from './Banners.module.css'
import { IconGift, IconShield } from '../../Svgs'

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
      link: '#products',
      external: false,
      title: 'Compra 100% segura',
      subtitle:
        'Todos os produtos possuem garantia, são fornecidos por Amazon, Mercado Livre ou AliExpress, e são os mais bem avaliados.',
      image: <IconShield />,
    },
    {
      link: 'https://www.meliuz.com.br/i/ref_lucasmauess',
      external: true,
      title: 'Receba R$ 5,00 do Méliuz',
      subtitle:
        'Ative o Méliuz para receber dinheiro de volta em todas as compras online.',
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
