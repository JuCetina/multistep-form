import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

test('Renderiza componente PersonallInfo', () => {
    
  const title = screen.getByText(/please/i);
  expect(title).toBeInTheDocument();
});

test('Renderiza la selección del plan', () => {
  const inputElement = screen.getAllByRole("textbox");
  const submitButton = screen.getAllByRole("button", { name: /Next Step/i });

  expect(inputElement).toHaveLength(3);
  expect(submitButton).toHaveLength(2);

  fireEvent.change(inputElement[0], { target: { value: "Juan"} } );
  expect(inputElement[0].value).toBe("Juan");
  fireEvent.change(inputElement[1], { target: { value: "juan@prueba.com"} } );
  expect(inputElement[1].value).toBe("juan@prueba.com");
  fireEvent.change(inputElement[2], { target: { value: "1234567"} } );
  expect(inputElement[2].value).toBe("1234567");

  fireEvent.click(submitButton[0]);

  screen.debug();
});