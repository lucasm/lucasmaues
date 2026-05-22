import ButtonCookies from '@/components/ButtonCookies'
import ButtonLanguage from '@/components/ButtonLanguage'
import ButtonTheme from '@/components/ButtonTheme'
import { IconLucasmdev } from '@/components/Svgs'
import Link from 'next/link'
import { ROUTES } from '../../routes/routes'
import LinksSocial from '../LinksSocial'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.footerLinks}>
          <li className={styles.footerLinksLi}>
            <div className={styles.linkSvg}>
              <IconLucasmdev />
            </div>
            Designed in Brazil by{' '}
            <div>
              <Link href={ROUTES.HOME.path}>{ROUTES.HOME.title}</Link>
            </div>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href={ROUTES.POSTS.path}>{ROUTES.POSTS.title}</Link>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href={ROUTES.STORE.path}>{ROUTES.STORE.title}</Link>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href={ROUTES.MENTORSHIP.path}>{ROUTES.MENTORSHIP.title}</Link>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href={ROUTES.WORK.path}>{ROUTES.WORK.title}</Link>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href="/">{ROUTES.ABOUT.title}</Link>
          </li>
          <li className={styles.footerLinksLi}>
            <Link href={ROUTES.LEGAL.path}>{ROUTES.LEGAL.title}</Link>
          </li>
        </ul>

        <LinksSocial />

        <div className={styles.footerButtons}>
          <ButtonCookies />
          <ButtonLanguage />
          <ButtonTheme />
        </div>
      </div>
    </footer>
  )
}
