import { LibraryView } from '../enums'
import { create } from 'zustand'

interface LibraryViewState {
  view: LibraryView
  setView: (to: LibraryView) => void
}

export const useLibraryView = create<LibraryViewState>()((set, _) => ({
  view: LibraryView.thumbnail,
  setView: (to: LibraryView) => set({ view: to }),
}))
