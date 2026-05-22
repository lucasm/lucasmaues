'use client'

import { JSX, ReactElement, useState } from 'react'
import { CONTACTS_LIST } from '../../data/contacts'
import Styles from './LinksSocial.module.css'

interface ILinks {
  id: string
  url: string
  icon?: ReactElement
  title: string
  active: boolean
  onlyText?: boolean
}

const socialIds = new Set([
  'youtube',
  'x',
  'bluesky',
  'linkedin',
  'github',
  'devto',
  'codepen',
  'instagram',
  'threads',
  'discord',
  'spotify',
  'letterboxd',
  'mastodon',
])

const socialLinks: ILinks[] = CONTACTS_LIST.filter(
  (link) => socialIds.has(link.id) && link.active
)

const limit = 7

const LinksSocial = (): JSX.Element => {
  const [showAll, setShowAll] = useState<boolean>(false)

  const handleToggle = (): void => {
    setShowAll((prev) => !prev)
  }

  const visibleLinks = showAll ? socialLinks : socialLinks.slice(0, limit)
  const showToggleButton = socialLinks.length > limit

  return (
    <div className={Styles.container}>
      <ul className={Styles.links}>
        {visibleLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.title}
              title={link.title}>
              {link.icon}
              <span>{link.title}</span>
            </a>
          </li>
        ))}

        {showToggleButton && (
          <li className={Styles.buttonMore}>
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={showAll}
              aria-label={showAll ? 'Show less' : 'Show more'}>
              {showAll ? 'Less' : 'More'}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default LinksSocial
