import { BookDetails } from '@/types/books'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BookState {
  bookId: string
  book: Partial<BookDetails> | null
  isBookModalOpen: boolean
  setBookModalOpen: (to: boolean) => void
  setBookId: (to: string) => void
  setBook: (to: Partial<BookDetails>) => void
}

export const useBookStore = create<BookState>()(
  devtools((set) => ({
    bookId: '',
    book: null,
    isBookModalOpen: false,
    setBookId: (to) => set((state) => ({ ...state, bookId: to })),
    setBookModalOpen: (to) =>
      set((state) => ({ ...state, isBookModalOpen: to })),
    setBook: (to) => set((state) => ({ ...state, book: to })),
  }))
)
