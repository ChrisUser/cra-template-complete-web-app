import { render, screen } from '@testing-library/react'
import NotFoundPage from '../../pages/NotFoundPage'
import React from 'react'

test('renders error message', () => {
    render(<NotFoundPage />)
    const errorMessage = screen.getByText(/Oops 404!/i)
    expect(errorMessage).toBeInTheDocument()
})
