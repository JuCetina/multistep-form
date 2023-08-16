import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test('Renderiza componente FormContainer', () => {
    
  const title = screen.getByText(/personal/i);
  expect(title).toBeInTheDocument();
});