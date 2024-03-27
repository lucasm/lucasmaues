import Link from 'next/link'
import {
  IconCodepen,
  IconDev,
  IconGithub,
  IconPatreon,
  IconX,
  IconLinkedin,
  IconYoutube,
  IconHeart,
  IconWhatsapp,
} from './Svgs'

interface ILinks {
  url: string
  icon: JSX.Element
  text: string
  internalPage?: boolean
  active: boolean
  fullText?: boolean
}

const Links: ILinks[] = [
  {
    url: 'https://x.com/lucasmezs',
    icon: <IconX />,
    text: 'X (Twitter)',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    text: 'DEV',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub',
    active: true,
  },
  {
    url: 'https://codepen.io/lucasm',
    icon: <IconCodepen />,
    text: 'CodePen',
    active: true,
  },
  {
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    text: 'YouTube',
    active: false,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    text: 'LinkedIn',
    active: true,
  },
  {
    url: '/store',
    icon: <IconHeart />,
    text: 'Produtos Recomendados',
    active: true,
    internalPage: true,
    fullText: true,
  },
  {
    url: 'https://patreon.com/lucasm',
    icon: <IconPatreon />,
    text: 'Mentoria para Devs',
    active: true,
    fullText: true,
  },
  {
    url: 'https://wa.me/5531997038007',
    icon: <IconWhatsapp />,
    text: 'Falar no WhatsApp',
    active: true,
    fullText: true,
  },
  // {
  //   url: 'https://instagram.com/lucasmezs',
  //   icon: <IconInstagram />,
  //   text: 'Instagram',
  //   active: false,
  // },
  // {
  //   url: 'https://buymeacoffee.com/lucasm',
  //   icon: <IconGithub />,
  //   text: 'Buy Me a Coffee',
  //   active: false,
  // },
  // {
  //   url: 'https://discord.com/users/lucasmezs',
  //   icon: <IconStar />,
  //   text: 'Discord',
  //   active: false,
  // },
  // {
  //   url: 'https://t.me/lucasmezs',
  //   icon: <IconStar />,
  //   text: 'Telegram',
  //   active: false,
  // },
  // {
  //   url: 'https://dribbble.com/lucasm',
  //   icon: <IconStar />,
  //   text: 'Dribbble',
  //   active: false,
  // },
  // {
  //   url: 'https://open.spotify.com/user/lucasmauess',
  //   icon: <IconStar />,
  //   text: 'Spotify',
  //   active: false,
  // },
  // https://www.tvtime.com/pt_BR/user/4994111/profile
]

export default function ComponentLinks() {
  return (
    <ul className="icons">
      {Links?.filter((link) => link.active).map((link, index) => (
        <li key={index} className={link.fullText ? 'full-text' : undefined}>
          <Link
            href={link.url}
            target={link.internalPage ? '_self' : '_blank'}
            rel={link.internalPage ? 'prefetch' : 'noopener'}>
            {link.icon}
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
