import { LibraryView } from '../enums'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LibraryViewState {
  view: LibraryView
  setView: (to: LibraryView) => void
}

export const useLibraryView = create<LibraryViewState>()(
  persist(
    (set, _) => ({
      view: LibraryView.thumbnail,
      setView: (to: LibraryView) => set({ view: to }),
    }),
    { name: 'library-view' }
  )
)
