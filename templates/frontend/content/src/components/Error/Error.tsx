import pageLabels from './Error.labels'
import styles from './Error.module.css'
import Link from 'next/link'
interface ErrorProps {
  type?: string
}

const Error = ({ type = 'systemFailure' }: ErrorProps) => {
  const labels = pageLabels('')
  return (
    <div className={styles.mainError}>
      <div className={styles.title}>{labels[type]}</div>
      <Link href="/" className={styles.link}>
        Go Home
      </Link>
    </div>
  )
}

export default Error
