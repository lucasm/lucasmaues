import { ReactElement } from 'react'
import Styles from './Button.module.css'
import Link from 'next/link'

type Props = {
  url?: string
  children: string | ReactElement
  isExternal?: boolean
  onClick?: () => void
}

export default function Button(props: Props) {
  return (
    <Link
      href={props.url || '#'}
      className={Styles.button}
      target={props.isExternal ? '_blank' : '_self'}
      rel={props.isExternal ? 'noopener noreferrer' : ''}
      onClick={props.onClick}>
      {props.children}
    </Link>
  )
}
