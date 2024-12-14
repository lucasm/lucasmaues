import { IProjects, projects } from '../../data/projects'

export default function CardsWork() {
  const Projects = projects.filter((project: IProjects) => project.active)

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
