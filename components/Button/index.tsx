import Styles from './Button.module.css'
import Link from 'next/link'

type Props = {
  url: string
  children: string | JSX.Element
  isExternal?: boolean
}

export default function Button(props: Props) {
  return (
    <Link
      href={props.url}
      className={Styles.button}
      target={props.isExternal ? '_blank' : '_self'}
      rel={props.isExternal ? 'noopener noreferrer' : ''}>
      {props.children}
    </Link>
  )
}
