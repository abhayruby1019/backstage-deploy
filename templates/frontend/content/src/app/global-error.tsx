'use client'

import Error from '@/components/Error/Error'

export default function GlobalError({}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  )
}
