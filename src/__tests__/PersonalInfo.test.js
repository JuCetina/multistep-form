import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test('Renderiza componente PersonallInfo', () => {
    
  const title = screen.getByText(/please/i);
  expect(title).toBeInTheDocument();
});