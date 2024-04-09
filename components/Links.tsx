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
  IconSpotify,
  IconBluesky,
  IconMastodon,
  IconLetterboxd,
  IconDiscord,
  IconInstagram,
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
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    text: 'DEV',
    active: true,
  },
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
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    text: 'YouTube',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    text: 'Instagram',
    active: true,
  },
  {
    url: 'https://open.spotify.com/user/lucasmauess',
    icon: <IconSpotify />,
    text: 'Spotify',
    active: true,
  },
  {
    url: 'https://letterboxd.com/lucasmezs',
    icon: <IconLetterboxd />,
    text: 'Letterboxd',
    active: true,
  },
  {
    url: 'https://discord.com/users/lucasmezs',
    icon: <IconDiscord />,
    text: 'Discord',
    active: true,
  },
  {
    url: 'https://lucasme.bsky.social',
    icon: <IconBluesky />,
    text: 'Bluesky',
    active: true,
  },
  {
    url: 'https://mastodon.social/@lucasmezs',
    icon: <IconMastodon />,
    text: 'Mastodon',
    active: true,
  },
  {
    url: '/store',
    icon: <IconHeart />,
    text: 'Loja Dev',
    active: true,
    internalPage: true,
    fullText: true,
  },
  {
    url: 'https://patreon.com/lucasm',
    icon: <IconPatreon />,
    text: 'Mentoria Dev',
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
  // url: 'https://buymeacoffee.com/lucasm',
  // url: 'https://t.me/lucasmezs',
  // url: 'https://dribbble.com/lucasm',
  // url: 'https://www.tvtime.com/pt_BR/user/4994111/profile'
]

export default function ComponentLinks() {
  const firstOfIndex = Links?.findIndex((link) => link.active && link.fullText)

  console.log(firstOfIndex)

  return (
    <ul className="links">
      {Links?.filter((link) => link.active).map((link, index) => (
        <li
          key={index}
          className={link.fullText ? 'full-text' : undefined}
          style={{ marginTop: index === firstOfIndex ? '1rem' : undefined }}>
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
