const DEFAULT_IMAGE = 'https://lucasm.dev/share.png'

export const STORE_FILTER_LABELS = {
  ALL_CATEGORIES: 'Categorias',
  ALL_BRANDS: 'Marcas',
} as const

export const ROUTES = {
  HOME: {
    path: '/',
    title: 'Lucas Maués',
    description:
      'Lucas Maués de Menezes is a Tech Lead, Senior Software Engineer & Frontend Specialist from Brazil, with 8+ years of experience.',
    seo: 'Tech Lead, Software Engineer & Frontend Specialist',
    image: DEFAULT_IMAGE,
  },
  ABOUT: {
    path: '/#about',
    title: 'About',
  },
  WORK: {
    path: '/work',
    title: 'Work',
    description: 'Leading teams to build scalable products.',
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
    title: 'Loja',
    description: 'Os melhores produtos para produtividade e dia a dia.',
    image: '/share-store.png',
  },
  MENTORSHIP: {
    path: '/mentor',
    title: 'Mentoria',
    description: 'Mentoria para profissionais de TI se destacarem no mercado.',
    image: '/share-mentor.png',
  },
  POSTS: {
    path: '/blog',
    description:
      'Dicas, tutoriais e insights sobre programação, carreira de tecnologia e produtividade.',
    title: 'Blog',
  },
  LEGAL: {
    path: '/legal',
    title: 'Privacy Policy & Terms of Service',
    description: 'Legal information about website lucasmaues.com',
    image: DEFAULT_IMAGE,
  },
}
