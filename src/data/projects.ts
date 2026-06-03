import {
  IconActDigital,
  IconAspiral,
  IconBancoBmg,
  IconCacba,
  IconChecktest,
  IconFindto,
  IconGlobo,
  IconMdn,
  IconMicrosoft,
  IconMoveda,
  IconNaCuia,
  IconNufen,
  IconSuperia,
  IconTalito,
  IconTCMPA,
  IconUFPA,
  IconVarejoAqui,
  IconYounner,
} from '@/components/Svgs'
import { ReactElement } from 'react'

export interface IProjects {
  name: string
  url: string
  description: string
  tags: string[]
  icon: ReactElement
  active: boolean
}

export const projects: IProjects[] = [
  {
    name: 'Banco Bmg',
    url: 'https://www.bancobmg.com.br/',
    description:
      'Banking products web platform, with 3.6 billion of BRL transactions per year (4T24).',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Next.js',
      'Node.js',
      'GraphQL',
      'Storybook',
      'Microsoft Azure',
      'AWS',
    ],
    icon: IconBancoBmg,
    active: true,
  },
  {
    name: 'Globo',
    url: 'https://www.globo.com/',
    description:
      'Web accessibility for the largest content portal in Brazil, with 1 billion accesses per month (4T23).',
    tags: [
      'JavaScript',
      'Preact',
      'Node.js',
      'Performance',
      'Accessibility',
      'Python',
      'Docker',
    ],
    icon: IconGlobo,
    active: true,
  },
  {
    name: 'Talito',
    url: 'https://talito.com.br/',
    description:
      'AI-powered financial data platform for Brazilian B2C and B2B audiences.',
    tags: ['AI', 'APIs', 'PostgreSQL', 'Frontend', 'React'],
    icon: IconTalito,
    active: true,
  },
  {
    name: 'Findto',
    url: 'https://findto.app/',
    description:
      'Open source decentralized search assistant for the Web and AI.',
    tags: [
      'Open Source',
      'PWA',
      'TypeScript',
      'React',
      'Next.js',
      'CSS',
      'APIs',
    ],
    icon: IconFindto,
    active: true,
  },
  {
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    description:
      'Portuguese translator for JavaScript, Web APIs, and open standards on Mozilla.',
    tags: [
      'Open Source',
      'Translations',
      'Web APIs',
      'JavaScript',
      'HTML',
      'CSS',
      'Accessibility',
    ],
    icon: IconMdn,
    active: true,
  },
  {
    name: 'Microsoft Open Source',
    url: 'https://opensource.microsoft.com/',
    description:
      'Portuguese translator for AI and Web technologies on Microsoft.',
    tags: ['Open Source', 'Translations', 'AI', 'Web'],
    icon: IconMicrosoft,
    active: true,
  },
  {
    name: 'act digital',
    url: 'https://actdigital.com/',
    description:
      'IT Consultant and Specialist in Frontend technologies for stand out companies.',
    tags: ['IT', 'Consultant', 'Specialist', 'Frontend'],
    icon: IconActDigital,
    active: true,
  },
  {
    name: 'Checktest',
    url: 'https://checktest.dev/',
    description:
      'AI testing tool for web apps, with reports, issues and security vulnerabilities.',
    tags: ['AI', 'Frontend', 'Web Apps'],
    icon: IconChecktest,
    active: true,
  },
  {
    name: 'Aspiral',
    url: 'https://aspiral.app/',
    description: 'Digital news magazine with trusted journalism. ',
    tags: ['Frontend', 'React'],
    icon: IconAspiral,
    active: true,
  },
  {
    name: 'Moveda',
    url: 'https://moveda.app/',
    description:
      'Daily recommendations, thoughts and challenges to help you grow or help others.',
    tags: ['AI', 'Frontend', 'React'],
    icon: IconMoveda,
    active: true,
  },

  {
    name: 'Younner',
    url: 'https://younner.com/',
    description: 'Frontend Developer at Software House.',
    tags: ['AI', 'APIs', 'PostgreSQL', 'Frontend', 'React', 'Node.js'],
    icon: IconYounner,
    active: true,
  },
  {
    name: 'Varejo Aqui',
    url: 'https://loja.varejoaqui.online/',
    description:
      'E-commerce for Brazil retailers and industries, with web responsive and mobile app version, real-time Pix, credit and debit card payments APIs integrations.',
    tags: [
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Android Studio',
    ],
    icon: IconVarejoAqui,
    active: true,
  },
  {
    name: 'Municipalities Court of Accounts of Pará',
    url: 'https://www.tcm.pa.gov.br/servicos/sessoes/',
    description:
      'Website, intranet, web apps, AWS APIs integrations, data visualization dashboards, and accessibility for a public court in Brazil.',
    tags: [
      'JavaScript',
      'PHP',
      'Node.js',
      'Java',
      'PostgreSQL',
      'SEO',
      'Accessibility',
      'AWS',
    ],
    icon: IconTCMPA,
    active: true,
  },
  {
    name: 'Superia',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Web application and CRM web components for a Brazilian international trading company.',
    tags: ['TypeScript', 'Vue.js', 'CSS', 'Atomic Design'],
    icon: IconSuperia,
    active: true,
  },
  {
    name: 'Federal University of Pará',
    url: 'https://radio.ufpa.br/webdoc60/',
    description:
      'Live audio and video streaming with web player, websites, CMS, and web documentary for the largest Brazilian public university in the Amazon region.',
    tags: ['JavaScript', 'PHP', 'Node.js', 'Python', 'MySQL', 'SEO', 'UI'],
    icon: IconUFPA,
    active: true,
  },
  {
    name: 'Nufen',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Website for mental health service with online video call therapy.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO', 'UI', 'UX'],
    icon: IconNufen,
    active: true,
  },
  {
    name: 'Na Cuia',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Website for a cultural producer and magazine in the Amazon region.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO'],
    icon: IconNaCuia,
    active: true,
  },
  {
    name: 'CACBA',
    url: 'https://linkedin.com/in/lucasmezs',
    description:
      'Hacked website recovered and redesigned for a non-profit organization of childhood protection in the Amazon region.',
    tags: ['JavaScript', 'CSS', 'PHP', 'WordPress', 'MySQL', 'SEO'],
    icon: IconCacba,
    active: true,
  },
]
