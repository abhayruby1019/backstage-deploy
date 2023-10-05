'use client'

import pageLabels from './HomePage.labels'

export default function HomePage() {
  const labels = pageLabels('')
  return <h1>{labels.title}</h1>
}
