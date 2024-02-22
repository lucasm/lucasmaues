import useSWR from 'swr'
import axios from 'axios'

export default function Posts() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('https://dev.to/api/articles?username=lucasm', fetcher)

  // data && console.log(data)

  if (error) return <div>Failed to load posts</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="posts">
      {data &&
        data.slice(0, 3).map((item: any, index: number) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
            <span>{index + 1}</span>
            {/* <figure>
                <img src={item.cover_image} width="200px"></img>
              </figure> */}
            <p className="posts-data">{item.readable_publish_date}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
    </div>
  )
}
