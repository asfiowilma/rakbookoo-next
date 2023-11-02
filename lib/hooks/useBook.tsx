import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { BookDetails } from '@/types/books'
import { RESET_BOOK_ID } from '../constants/book'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { urlBuilder } from '../utils'

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
    setBookModalOpen: (to) =>
      set((state) => ({ ...state, isBookModalOpen: to })),
    setBookId: (to) => set((state) => ({ ...state, bookId: to })),
    setBook: (to) => set((state) => ({ ...state, book: to })),
  }))
)

export const useBook = () => {
  const {
    setBookModalOpen: setBookModalOpen_,
    setBookId: setBookId_,
    ...bookStore
  } = useBookStore()
  const router = useRouter()
  const pathname = usePathname()
  const routerParams = useSearchParams()

  const getBookRoute = (id?: string) => {
    const params = new URLSearchParams(routerParams.toString())
    if (id) params.append('book', id)
    else params.delete('book')
    return urlBuilder(pathname, params)
  }

  const setBookModalOpen = (to: boolean) => {
    setBookModalOpen_(to)
    if (!to) {
      router.replace(getBookRoute())
      setBookId(RESET_BOOK_ID)
    }
  }

  const setBookId = (to: string) => {
    setBookId_(to)
    if (to !== RESET_BOOK_ID) router.replace(getBookRoute(to))
  }

  return { ...bookStore, setBookModalOpen, setBookId }
}
