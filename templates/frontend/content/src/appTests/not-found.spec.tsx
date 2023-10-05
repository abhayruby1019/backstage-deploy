import { render } from '@testing-library/react'
import NotFound from '@/app/not-found'

describe('NotFound', () => {
  it('should display technical error when type is not passed', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
