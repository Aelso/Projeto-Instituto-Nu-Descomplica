import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});

expect(linkElement).toMatch(/learn react/i);

await render(<App />);
const linkElement = screen.getByText(/learn react/i);
expect(linkElement).toBeInTheDocument();
