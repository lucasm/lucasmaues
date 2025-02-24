import { IconArrowExternal } from '../Svgs'
import Styles from './BlogPosts.module.css'
import { useState, useEffect } from 'react'

export default function Posts() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=lucasm`,
          {
            cache: 'no-store',
          }
        )
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
      <p>
        Failed to load posts, check{' '}
        <a
          href="https://dev.to/lucasm"
          target="_blank"
          rel="noopener noreferrer">
          my blog
        </a>{' '}
        directly.
      </p>
    )
  if (loading) return <p>Loading...</p>

  return (
    <ul className={Styles.posts}>
      {data &&
        data.slice(0, 3).map((item: any, index: number) => (
          <li key={index}>
            {/* <figure></figure> */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.link}>
              {/* <span>{index + 1}</span> */}
              <div className={Styles.title}>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <IconArrowExternal />
            </a>
          </li>
        ))}
    </ul>
  )
}
