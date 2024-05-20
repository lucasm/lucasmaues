import useSWR from 'swr'
import axios from 'axios'

export default function Posts() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('https://dev.to/api/articles?username=lucasm', fetcher)

  if (error) return <div>Failed to load posts</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul className="posts">
      {data &&
        data.slice(0, 3).map((item: any, index: number) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {/* <figure>
                <img src={item.cover_image} width="200px"></img>
              </figure> */}
              {/* <p className="posts-data">{item.readable_publish_date}</p> */}

              <div>
                <span>{index + 1}</span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </a>
          </li>
        ))}
    </ul>
  )
}
