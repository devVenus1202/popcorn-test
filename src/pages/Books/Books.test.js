import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Books from "./Books";

const mockedAddReadingList = jest.fn();
describe("renders books and its contents", () => {
  it("should be rendered contents", () => {
    render(<Books />);
    const inputElement = screen.getByRole("textbox");
    const initialContent = screen.getByText(/Please type to search/i);
    expect(inputElement).toBeInTheDocument();
    expect(initialContent).toBeInTheDocument();
  });
  it("should search books with typed key", async () => {
    render(<Books />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "Test" } });
    expect(inputElement.value).toBe("Test");

  });
});
