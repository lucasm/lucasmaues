'use client'

import { JSX, useEffect, useState } from 'react'
import Button from '../Button'
import { IconArrowExternal } from '../Svgs'
import Styles from './BlogPosts.module.css'

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
  const noContent = !loading && !error && (!data || data.length === 0)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=lucasm&per_page=5`,
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

  if (!data || loading)
    return (
      <div className={Styles.loading}>
        <h3>Loading...</h3>
      </div>
    )

  if (noContent) return <p>No posts available.</p>

  return (
    <ul className={Styles.posts}>
      {data?.map((post) => (
        <li key={post.id ?? post.url}>
          <div>
            {/* <figure></figure> */}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.link}>
              <h2>{post.title}</h2>
            </a>

            <p>{post.description}</p>

            <Button variant="black" size="small" url={post.url} isExternal>
              <>
                Open
                <IconArrowExternal />
              </>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
