import { render } from '@testing-library/react'
import HomePage from './HomePage'

it('renders homepage', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})
