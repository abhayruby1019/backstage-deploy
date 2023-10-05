import { render } from '@testing-library/react'
import GlobalError from '@/app/global-error'

describe('Error Boundary', () => {
  it('should display technical error when type is not passed', () => {
    const { container } = render(<GlobalError />)
    expect(container).toMatchSnapshot()
  })
})
