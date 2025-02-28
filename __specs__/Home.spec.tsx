import { render, screen } from '@testing-library/react'

import Home from '@/app/page'

describe('Home', () => {
  test('it should have Docs text', () => {
    render(<Home />)
    const myElem = screen.getByText('Read our docs')
    expect(myElem).toBeInTheDocument()
  })
})
