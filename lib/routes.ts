export const routes = {
  login: '/auth/login',
  register: '/auth/register',

  library: '/library',
  books: '/library/books',
  newBook: '/library/books/new',
  book: (bookId?: number) => `/library/books/${bookId}`,
  editBook: (bookId: number) => `/library/books/${bookId}/edit`,
  newShelf: '/library/shelves/new',
  shelves: '/library/shelves',
  shelf: (shelfId?: number) => `/library/shelves/${shelfId}`,
  editShelf: (shelfId?: number) => `/library/shelves/${shelfId}/edit`,
}

export const api = {
  getBooks: '/api/library/books',
}
