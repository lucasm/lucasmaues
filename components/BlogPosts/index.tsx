'use client'

import { IconArrowExternal } from '../Svgs'
import Styles from './BlogPosts.module.css'
import { useState, useEffect, JSX } from 'react'

// Types
interface BlogPost {
  id: number
  title: string
  description: string
  url: string
}

export default function Posts(): JSX.Element {
  const [data, setData] = useState<BlogPost[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=lucasm&per_page=3`,
          {
            cache: 'no-store',
            signal: abortController.signal,
          }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result: BlogPost[] = await response.json()
        setData(result)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => abortController.abort()
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
      {data?.map((item: BlogPost) => (
        <li key={item.id ?? item.url}>
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
