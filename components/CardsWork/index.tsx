import { projects } from '@/data/projects'
import Style from './CardsWork.module.css'

export default function CardsWork() {
  const workProjects = projects.filter((project) => project.active)

  return (
    <div className={Style.cards}>
      {workProjects
        ?.filter((project) => project.active)
        .map((item, index) => (
          <div key={index} className={Style.card}>
            <a
              href={item.url + '?utm_source=lucasmaues.com'}
              target="_blank"
              rel="noopener noreferrer">
              <figure>{item.icon}</figure>
            </a>

            <h3>{item.name}</h3>
            <p>{item.description}</p>

            {item?.tags.map((subItem, subIndex) => (
              <span key={subIndex}>{subItem}</span>
            ))}
          </div>
        ))}
    </div>
  )
}
