import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.logo}>
          Page<span className={styles.logoAccent}>237</span>
        </div>
        <nav className={styles.links}>
          <Link href="/listings" className={styles.link}>Browse</Link>
          <Link href="/dashboard" className={styles.link}>Dashboard</Link>
          <Link href="/profile" className={styles.link}>Profile</Link>
          <a href="https://wa.me/237670000000" target="_blank" rel="noopener noreferrer" className={styles.link}>Support</a>
        </nav>
        <div className={styles.copyright}>
          &copy; {currentYear} Page237. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
