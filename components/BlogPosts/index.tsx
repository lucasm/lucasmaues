import Styles from './BlogPosts.module.css'
import { useState, useEffect } from 'react'

export default function Posts() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
      <div>
        Failed to load posts, check
        <a
          href="https://dev.to/lucasm"
          target="_blank"
          rel="noopener noreferrer">
          my blog
        </a>{' '}
        directly
      </div>
    )
  if (loading) return <p>Loading...</p>

  return (
    <ul className={Styles.posts}>
      {data &&
        data.slice(0, 3).map((item: any, index: number) => (
          <li key={index}>
            <figure></figure>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={hoveredIndex === index ? Styles.active : Styles.link}>
              <div>
                <div className={Styles.title}>
                  {/* <span>
                    {hoveredIndex === index ? (
                      <div className={Styles.shape}></div>
                    ) : (
                      index + 1
                    )}
                  </span> */}
                  <h3>{item.title}</h3>
                </div>

                <p>{item.description}</p>
              </div>
            </a>
          </li>
        ))}
    </ul>
  )
}
