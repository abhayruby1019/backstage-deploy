import { render, screen } from '@testing-library/react'
import Error from '@/components/Error/Error'
import pageLabels from './Error.labels'

describe('Error component', () => {
  it('should display technical error when type is not passed', () => {
    render(<Error />)
    const labels = pageLabels('')

    const pageTitle = screen.getByText(labels.systemFailure)

    expect(pageTitle).toBeInTheDocument()
  })
})
