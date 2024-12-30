import { render, screen } from '@testing-library/react'
import HomePage from '../../pages/HomePage'
import React from 'react'

test('renders hello world message', () => {
    render(<HomePage />)
    const greetings = screen.getByText(/Hello world/i)
    expect(greetings).toBeInTheDocument()
})
