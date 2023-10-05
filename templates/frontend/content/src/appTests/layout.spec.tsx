import { render } from '@testing-library/react'
import Layout from '@/app/layout'

describe('Home Page RSC', () => {
  it('should display technical error when type is not passed', () => {
    const table = document.createElement('html')
    const { container } = render(
      <Layout>
        <div>some content</div>
      </Layout>,
      {
        container: document.body.appendChild(table),
      }
    )
    expect(container).toMatchSnapshot()
  })
})
