import {
  svgProjectBmg,
  svgProjectGlobo,
  svgProjectFindto,
  svgProjectVarejoAqui,
  svgProjectTCMPA,
  svgProjectUFPA,
  svgProjectSuperia,
} from './Svgs'

interface IProjects {
  name: string
  url: string
  description: string
  tags: string[]
  icon: JSX.Element
  active: boolean
}

export default function WorkCards() {
  const Projects: IProjects[] = [
    {
      name: 'Banco Bmg',
      url: 'https://www.bancobmg.com.br/',
      description:
        'Web Application of financial products for a bank in Brazil, with 600M BRL transactions per month.',
      tags: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'GraphQL',
        'Storybook',
        'Microsoft Azure',
        'AWS',
      ],
      icon: svgProjectBmg,
      active: true,
    },
    {
      name: 'Globo',
      url: 'https://www.globo.com/',
      description:
        'Web Accessibility for the homepage of largest content portal in Brazil with 900M of access per month.',
      tags: ['JavaScript', 'Preact', 'Node.js', 'Performance', 'Accessibility', 'Python', 'Docker'],
      icon: svgProjectGlobo,
      active: true,
    },
    {
      name: 'Findto',
      url: 'https://findto.app/',
      description:
        'Progressive Web App for an open source decentralized Web & AI search assistant.',
      tags: ['Open Source', 'TypeScript', 'React', 'Next.js', 'PWA', 'CSS', 'APIs'],
      icon: svgProjectFindto,
      active: true,
    },
    {
      name: 'Varejo Aqui',
      url: 'https://loja.varejoaqui.online/',
      description:
        'E-commerce Web Responsive and Mobile App with real-time payments APIs, like Pix and credit card, for Brazil retailers and industries.',
      tags: ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'Android Studio'],
      icon: svgProjectVarejoAqui,
      active: true,
    },
    {
      name: 'Municipalities Court of Accounts of Pará',
      url: 'https://www.tcm.pa.gov.br/servicos/sessoes/',
      description:
        'Website, Intranet, Web Apps, APIs, AWS S3 integration, Data Visualization, and Accessibility for a court.',
      tags: ['JavaScript', 'PHP', 'Node.js', 'Java', 'PostgreSQL', 'SEO', 'Accessibility', 'AWS'],
      icon: svgProjectTCMPA,
      active: true,
    },
    {
      name: 'Federal University of Pará',
      url: 'https://www.radio.ufpa.br/webdoc60/',
      description:
        'Live Audio and Video Streaming with Web Player for a university, Websites, CMS, hacked Website recovered, and Web Documentary.',
      tags: ['JavaScript', 'PHP', 'Node.js', , 'Python', 'MySQL', 'SEO', 'UI'],
      icon: svgProjectUFPA,
      active: true,
    },
    {
      name: 'Superia',
      url: 'https://superia.global/',
      description: 'Web Application and Components for an international trading company.',
      tags: ['TypeScript', 'Vue.js', 'CSS', 'Atomic Design'],
      icon: svgProjectSuperia,
      active: true,
    },
  ]

  return (
    <div className="cards">
      {Projects?.filter((project) => project.active).map((item, index) => (
        <a
          key={index}
          href={item.url + '?utm_source=lucasm.dev'}
          target="_blank"
          rel="noopener noreferrer">
          <div className="card">
            <figure>{item.icon}</figure>

            <h3>{item.name}</h3>
            <p>{item.description}</p>

            {item?.tags.map((subItem, subIndex) => (
              <span key={subIndex}>{subItem}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}
