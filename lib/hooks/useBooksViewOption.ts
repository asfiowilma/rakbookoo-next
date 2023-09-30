import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BooksViewOptionsState {
  showAuthor: boolean
  setShowAuthor: (to: boolean) => void
  showCoverImage: boolean
  setShowCoverImage: (to: boolean) => void
  showRating: boolean
  setShowRating: (to: boolean) => void
  showTags: boolean
  setShowTags: (to: boolean) => void
}

export const useBooksViewOptionsStore = create<BooksViewOptionsState>()(
  persist(
    (set, _) => ({
      showCoverImage: true,
      setShowCoverImage: (to) => set({ showCoverImage: to }),
      showAuthor: true,
      setShowAuthor: (to) => set({ showAuthor: to }),
      showRating: false,
      setShowRating: (to) => set({ showRating: to }),
      showTags: false,
      setShowTags: (to) => set({ showTags: to }),
    }),
    { name: 'books-options' }
  )
)
