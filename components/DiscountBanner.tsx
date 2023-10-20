import React from 'react'
import Style from '../styles/Store.module.css'

interface DiscountBannerProps {
  link: string
  title: string
  subtitle: string
  image: JSX.Element
}

export default function DiscountBanner({ link, title, subtitle, image }: DiscountBannerProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={Style.containerDiscount}>
      <figure>{image}</figure>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </a>
  )
}
