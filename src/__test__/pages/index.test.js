import { render, screen } from '@testing-library/react'
import Home from '../../pages/index.tsx'

test('renders without erros', () => {
	render(<Home />)
	expect(
		screen.getByRole('heading', { name: 'Welcome to Next.js!' })
	).toBeInTheDocument()
})
