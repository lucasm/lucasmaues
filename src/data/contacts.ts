import {
  IconBluesky,
  IconCodepen,
  IconDev,
  IconDiscord,
  IconEmail,
  IconGithub,
  IconInstagram,
  IconLetterboxd,
  IconLinkedin,
  IconMastodon,
  IconPatreon,
  IconSpotify,
  IconThreads,
  IconWhatsapp,
  IconX,
  IconYoutube,
} from '@/components/Svgs'
import { createElement, ReactElement } from 'react'

export interface IContacts {
  id: string
  title: string
  url: string
  active: boolean
  icon?: ReactElement
}

export type Contacts = {
  [key: string]: IContacts
}

export const CONTACTS: Contacts = {
  email: {
    id: 'email',
    title: 'Email',
    url: 'hello@lucasmaues.com',
    active: true,
    icon: IconEmail,
  },
  emailLegal: {
    id: 'emailLegal',
    title: 'Legal Email',
    url: 'legal@lucasmaues.com',
    active: true,
    icon: IconEmail,
  },
  x: {
    id: 'x',
    title: 'X',
    url: 'https://x.com/lucasmmau',
    active: true,
    icon: createElement(IconX),
  },
  linkedin: {
    id: 'linkedin',
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/lucas-maues-menezes',
    active: true,
    icon: createElement(IconLinkedin),
  },
  github: {
    id: 'github',
    title: 'GitHub',
    url: 'https://github.com/lucasm',
    active: true,
    icon: createElement(IconGithub),
  },
  youtube: {
    id: 'youtube',
    title: 'YouTube',
    url: 'https://youtube.com/@lucasmmau',
    active: true,
    icon: createElement(IconYoutube),
  },
  devto: {
    id: 'devto',
    title: 'DEV',
    url: 'https://dev.to/lucasm',
    active: true,
    icon: createElement(IconDev),
  },
  codepen: {
    id: 'codepen',
    title: 'CodePen',
    url: 'https://codepen.io/lucasm',
    active: true,
    icon: createElement(IconCodepen),
  },
  bluesky: {
    id: 'bluesky',
    title: 'Bluesky',
    url: 'https://bsky.app/profile/lucasmaues.com',
    active: true,
    icon: createElement(IconBluesky),
  },
  whatsapp: {
    id: 'whatsapp',
    title: 'WhatsApp',
    url: 'https://wa.me/5531997038007',
    active: true,
    icon: IconWhatsapp,
  },
  instagram: {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://instagram.com/lucasmmau',
    active: false,
    icon: createElement(IconInstagram),
  },
  threads: {
    id: 'threads',
    title: 'Threads',
    url: 'https://threads.net/@lucasmmau',
    active: false,
    icon: createElement(IconThreads),
  },
  discord: {
    id: 'discord',
    title: 'Discord',
    url: 'https://discord.com/users/lucasmmau',
    active: false,
    icon: createElement(IconDiscord),
  },
  spotify: {
    id: 'spotify',
    title: 'Spotify',
    url: 'https://open.spotify.com/user/lucasmauess',
    active: false,
    icon: createElement(IconSpotify),
  },
  letterboxd: {
    id: 'letterboxd',
    title: 'Letterboxd',
    url: 'https://letterboxd.com/lucasmaues',
    active: false,
    icon: createElement(IconLetterboxd),
  },
  mastodon: {
    id: 'mastodon',
    title: 'Mastodon',
    url: 'https://mastodon.social/@lucasmezs',
    active: false,
    icon: createElement(IconMastodon),
  },
  patreon: {
    id: 'patreon',
    title: 'Patreon',
    url: 'https://patreon.com/lucasm',
    active: false,
    icon: createElement(IconPatreon),
  },
}

export const CONTACTS_LIST: IContacts[] = Object.values(CONTACTS)

export const getContactById = (id: string): IContacts | undefined =>
  CONTACTS[id]
