import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Component', () => {
    it('renders heading text', () => {
        render(<App />)
    })

    it('add two numbers correctly', () => {
        const sum = 2 + 2
        expect(sum).toBe(4)
    })
    it("check the fetch users heading",()=>{
        render(<App/>)
        const heading = screen.getByText("user Detail")
        console.log(heading)
    })
})