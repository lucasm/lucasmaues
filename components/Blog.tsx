import useSWR from 'swr'
import axios from 'axios'

export default function Blog() {
  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR(
    'https://dev.to/api/articles?username=lucasm&state=fresh&per_page=3',
    fetcher
  )

  data && console.log(data)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul className="blog">
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
            <span>
              {item.description} ({item.reading_time_minutes} min)
            </span>
          </li>
        ))}
    </ul>
  )
}
