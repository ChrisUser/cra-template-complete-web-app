import { render, screen } from '@testing-library/react'
import DateDisplay from '../../components/DateDisplay'
import React from 'react'

test('renders current date', () => {
    render(<DateDisplay />)
    const timeFormat = screen.getByText(/GMT/i)
    expect(timeFormat).toBeInTheDocument()
})
