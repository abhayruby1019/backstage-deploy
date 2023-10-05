import styles from '../styles/page.module.css'
import HomePage from '../components/HomePage/HomePage'

export default function Home() {
  // throw new Error('Error')
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}
