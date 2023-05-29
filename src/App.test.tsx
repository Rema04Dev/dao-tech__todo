import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders application', () => {
  it('renders title', () => {
    render(<App />);
    const titleText = screen.getByRole('heading', { level: 1 });
    expect(titleText).toBeInTheDocument();
  });
});
