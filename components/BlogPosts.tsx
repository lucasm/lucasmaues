'use client'

import { useState, useEffect } from 'react'

export default function Posts() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=lucasm`, {
          // diable vercel cache
          next: { revalidate: 0 },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (error)
    return (
      <div>
        Failed to load posts, check
        <a href="https://dev.to/lucasm" target="_blank" rel="noopener noreferrer">
          my blog
        </a>{' '}
        directly
      </div>
    )
  if (loading) return <p>Loading...</p>

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
