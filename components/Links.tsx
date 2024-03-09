import Link from 'next/link'
import {
  IconStar,
  IconCodepen,
  IconDev,
  IconGithub,
  IconPatreon,
  IconTwitter,
  IconLinkedin,
  IconInstagram,
} from './Svgs'

interface ILinks {
  url: string
  icon: JSX.Element
  text: string
  internalPage?: boolean
  active: boolean
}

const Links: ILinks[] = [
  {
    url: 'https://twitter.com/lucasmezs',
    icon: <IconTwitter />,
    text: 'Twitter',
    active: true,
  },
  {
    url: '/store',
    icon: <IconStar />,
    text: 'Produtos Recomendados',
    active: true,
    internalPage: true,
  },
  {
    url: 'https://patreon.com/lucasm',
    icon: <IconPatreon />,
    text: 'Patreon - Mentoria Dev',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    text: 'DEV - Blog',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub - Open Source',
    active: true,
  },
  // {
  //   url: 'https://buymeacoffee.com/lucasm',
  //   icon: <IconGithub />,
  //   text: 'Buy Me a Coffee',
  //   active: false,
  // },
  {
    url: 'https://codepen.io/lucasm',
    icon: <IconCodepen />,
    text: 'CodePen',
    active: true,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    text: 'LinkedIn',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    text: 'Instagram',
    active: true,
  },
  // {
  //   url: 'https://youtube.com/@lucasmdev',
  //   icon: <IconStar />,
  //   text: 'YouTube',
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
    <div className="icons" id="links">
      {Links?.filter((link) => link.active).map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target={link.internalPage ? '_self' : '_blank'}
          rel={link.internalPage ? 'prefetch' : 'noopener'}>
          {link.icon}
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  )
}
