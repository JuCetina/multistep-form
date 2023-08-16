import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test('Renderiza el aside de los Steps', () => {
    const text = screen.getByText(/plan/i);
    expect(text).toBeInTheDocument();
});