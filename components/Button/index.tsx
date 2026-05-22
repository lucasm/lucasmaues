import Link from 'next/link'
import { JSX, ReactNode } from 'react'
import Styles from './Button.module.css'

type ButtonVariant = 'yellow' | 'black' | 'whiteBorder' | 'blackBorder'

type ButtonSize = 'small' | 'medium'

type Props = {
  url?: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  isExternal?: boolean
  title?: string
  onClick?: () => void
  onMouseEnter?: () => void
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  yellow: Styles.yellow,
  black: Styles.black,
  whiteBorder: Styles.whiteBorder,
  blackBorder: Styles.blackBorder,
}

export default function Button(props: Readonly<Props>): JSX.Element {
  const variant = props.variant ?? 'yellow'
  const size = props.size ?? 'medium'

  return (
    <Link
      href={props.url || '#'}
      className={`${Styles.button} ${VARIANT_CLASS[variant]} ${
        size === 'small' ? Styles.small : ''
      }`}
      target={props.isExternal ? '_blank' : '_self'}
      rel={props.isExternal ? 'noopener noreferrer' : ''}
      title={props.title}
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}>
      {props.children}
    </Link>
  )
}
