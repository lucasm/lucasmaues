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

{
  /* cultural magazine website, hotsites, hacked website recovered */
}

export default function WorkCards() {
  const Projects: IProjects[] = [
    {
      name: 'Banco Bmg',
      url: 'https://www.bancobmg.com.br/',
      description:
        'Web Application of financial products with 500M BRL sales month for a bank in Brazil.',
      tags: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'GraphQL',
        'Storybook',
        'Microsoft Azure',
      ],
      icon: svgProjectBmg,
      active: true,
    },
    {
      name: 'Globo',
      url: 'https://www.globo.com/',
      description:
        'Web Accessibility for the largest content portal in Brazil with 900M of access per month.',
      tags: ['JavaScript', 'Preact', 'Node.js', 'Performance', 'A11y', 'Python', 'Docker'],
      icon: svgProjectGlobo,
      active: true,
    },
    {
      name: 'Findto',
      url: 'https://findto.app/',
      description: 'Progressive Web App for a decentralized Web & AI search assistant.',
      tags: ['Open Source', 'TypeScript', 'React', 'Next.js', 'PWA', 'CSS', 'APIs'],
      icon: svgProjectFindto,
      active: true,
    },
    {
      name: 'Varejo Aqui',
      url: 'https://loja.varejoaqui.online/',
      description:
        'E-commerce Web Responsive and Mobile App, with real-time payments APIs (Pix), for Brazil retailers and industries.',
      tags: ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'Android Studio'],
      icon: svgProjectVarejoAqui,
      active: true,
    },
    {
      name: 'Municipalities Court of Accounts of Pará',
      url: 'https://www.tcm.pa.gov.br/servicos/sessoes/',
      description:
        'Websites with Intranet, Web Apps, APIs, Data Visualization and Accessibility for a court.',
      tags: ['JavaScript', 'PHP', 'Node.js', 'Java', 'PostgreSQL', 'SEO', 'A11y', 'AWS'],
      icon: svgProjectTCMPA,
      active: true,
    },
    {
      name: 'Federal University of Pará',
      url: 'https://www.radio.ufpa.br/webdoc60/',
      description:
        'Live Audio and Video Streaming with Web Player, Websites, CMS and Multimedia Web Documentary for an university.',
      tags: ['JavaScript', 'PHP', 'Node.js', , 'Python', 'MySQL', 'SEO', 'UI'],
      icon: svgProjectUFPA,
      active: true,
    },
    {
      name: 'Superia',
      url: 'https://superia.global/',
      description: 'Web Components for a CRM application of a trading company.',
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
