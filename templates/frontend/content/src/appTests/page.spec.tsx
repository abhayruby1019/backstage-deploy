import { render } from '@testing-library/react'
import RootPage from '@/app/page'

describe('Home Page RSC', () => {
  it('should display technical error when type is not passed', () => {
    const { container } = render(<RootPage />)
    expect(container).toMatchSnapshot()
  })
})
