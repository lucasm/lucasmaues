const DEFAULT_IMAGE = 'https://lucasm.dev/share.png'

export const STORE_FILTER_LABELS = {
  ALL_CATEGORIES: 'Todas as Categorias',
  ALL_BRANDS: 'Todas as Marcas',
} as const

export const ROUTES = {
  HOME: {
    path: '/',
    title: 'Lucas Maués',
    description:
      'Lucas Maués de Menezes is a Tech Lead & Senior Frontend Software Engineer from Brazil, with 8+ years of experience.',
    seo: 'Tech Lead & Senior Frontend Software Engineer',
    image: DEFAULT_IMAGE,
  },
  ABOUT: {
    path: '/#about',
    title: 'About',
  },
  WORK: {
    path: '/work',
    title: 'Work',
    description: 'Building high-impact solutions with companies and teams.',
    image: DEFAULT_IMAGE,
  },
  CONTACT: {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with me.',
    image: DEFAULT_IMAGE,
  },
  STORE: {
    path: '/store',
    title: 'Store',
    description: 'Os melhores produtos tech, testados e recomendados.',
    image: '/share-store.png',
  },
  MENTORSHIP: {
    path: '/mentor',
    title: 'Mentor',
    description: 'Mentoria para profissionais se destacarem no mercado tech.',
    image: '/share-mentor.png',
  },
  CONTENT: {
    path: '/#posts',
    title: 'Posts',
  },
  LEGAL: {
    path: '/legal',
    title: 'Privacy Policy, Terms of Use & Cookies Notice',
    description: 'Legal information about website.',
    image: DEFAULT_IMAGE,
  },
}
