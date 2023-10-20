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
      description: 'Web application of financial products for a bank in Brazil.',
      tags: ['TypeScript', 'React', 'Next.js', 'Node.js', 'GraphQL'],
      icon: svgProjectBmg,
      active: true,
    },
    {
      name: 'Globo',
      url: 'https://www.globo.com/',
      description: 'Accessibility for the largest content web portal in Brazil.',
      tags: ['JavaScript', 'React', 'Node.js', 'Performance', 'A11y', 'Python'],
      icon: svgProjectGlobo,
      active: true,
    },
    {
      name: 'Findto',
      url: 'https://findto.app/',
      description:
        'Assistant for decentralized web search with control of sources, AI, and privacy.',
      tags: ['TypeScript', 'React', 'Next.js', 'PWA'],
      icon: svgProjectFindto,
      active: true,
    },
    {
      name: 'Varejo Aqui',
      url: 'https://loja.varejoaqui.online/',
      description: 'E-commerce for retailers and industries, with web responsive and mobile app.',
      tags: ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js'],
      icon: svgProjectVarejoAqui,
      active: true,
    },
    {
      name: 'Municipalities Court of Accounts of Pará',
      url: 'https://www.tcm.pa.gov.br/servicos/sessoes/',
      description: 'Websites, intranet, web app, services, data visualization and accessibility.',
      tags: ['JavaScript', 'PHP', 'Java', 'PostgreSQL', 'SEO', 'A11y'],
      icon: svgProjectTCMPA,
      active: true,
    },
    {
      name: 'Federal University of Pará',
      url: 'https://www.radio.ufpa.br/webdoc60/',
      description:
        'Websites, live audio streaming radio player, CMS and multimedia web documentary.',
      tags: ['PHP', 'Python', 'MySQL', 'SEO', 'UI', 'JavaScript'],
      icon: svgProjectUFPA,
      active: true,
    },
    {
      name: 'Superia',
      url: 'https://superia.global/',
      description: 'Components for a CRM web application.',
      tags: ['TypeScript', 'Vue.js', 'CSS'],
      icon: svgProjectSuperia,
      active: false,
    },
  ]

  return (
    <div className="cards">
      {Projects?.filter((project) => project.active).map((item, index) => (
        <a key={index} href={item.url + '?utm_source=lucasm.dev'} target="_blank">
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
