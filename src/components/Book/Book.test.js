import { render, screen, fireEvent } from '@testing-library/react';
import BookItem from './Book';

const mockedAddReadingList = jest.fn();
describe('renders book and its contents', () => {
  const mockProps = {
    volumeInfo: {
      title: "This is test Title",
      authors: ["test1", "test2"],
      publisher: "Test publisher",
      publishedDate: "2022-06-08"
    }
  }

  it("should be rendered contents", () => {
    render(<BookItem info={mockProps} onAddReadingList = {mockedAddReadingList} />);
    const titleElement = screen.getByText(/this is test title/i);
    const authorsElement = screen.getByText(/test1,test2/i);
    const publisherElement = screen.getByText(/test publisher/i);
    const publishedDateElement = screen.getByText(/2022-06-08/i);
    expect(titleElement).toBeInTheDocument();
    expect(authorsElement).toBeInTheDocument();
    expect(publisherElement).toBeInTheDocument();
    expect(publishedDateElement).toBeInTheDocument();
  });
  it("should be clicked add reading books", () => {
    render(<BookItem info={mockProps} onAddReadingList = {mockedAddReadingList} />);
    const addingButtonElement = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addingButtonElement);
    expect(mockedAddReadingList.mock.calls.length).toBe(1);
  })
});