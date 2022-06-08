import { getBooksWithQuery } from ".";

describe('get books', () => {
  const mockProps = {
    volumeInfo: {
      title: "This is test Title",
      authors: ["test1", "test2"],
      publisher: "Test publisher",
      publishedDate: "2022-06-08"
    }
  }

  it("should get 5 results", async () => {
    const books = await getBooksWithQuery("test");
    expect(books.items.length).toEqual(5);
  });
  it("should get error", async () => {
    const books = await getBooksWithQuery("");
    expect(books.error).not.toBeUndefined();
    expect(books.items).toBeUndefined();
  });
  
});