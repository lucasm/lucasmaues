import useSWR from 'swr'
import axios from 'axios'

export default function Posts() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR(
    'https://dev.to/api/articles?username=lucasm&state=fresh&per_page=3',
    fetcher
  )

  data && console.log(data)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul className="posts">
      {data &&
        data.map((item) => (
          <li key={item.id}>
            {/* <p>{item.readable_publish_date}</p> */}
            <h3>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
    </ul>
  )
}
