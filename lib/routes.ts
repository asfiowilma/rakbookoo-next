export const routes = {
  login: '/auth/login',
  register: '/auth/register',

  library: '/library',
  books: '/library/books',
  newBook: '/library/book/new',
  book: (bookId?: string) => `/library/book/${bookId}`,
  editBook: (bookId: string) => `/library/book/${bookId}/edit`,
  newShelf: '/library/shelves/new',
  shelves: '/library/shelves',
  shelf: (shelfId?: number) => `/library/shelves/${shelfId}`,
  editShelf: (shelfId?: number) => `/library/shelves/${shelfId}/edit`,
}

export const api = {
  getBooks: '/api/library/books',
  getBookDetails: (bookId: string) => `/api/library/book/${bookId}`,
}
