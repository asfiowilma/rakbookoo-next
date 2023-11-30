'use client'

import { computed, effect, signal } from 'signals-react-safe'

import { LibraryView } from '../enums'

export const libraryView = signal<LibraryView>(LibraryView.thumbnail)

export const isShowAuthor = signal<boolean>(true)
export const isShowCoverImage = signal<boolean>(true)
export const isShowRating = signal<boolean>(false)
export const isShowTags = signal<boolean>(false)

effect(() => {
  if (libraryView.value == LibraryView.thumbnail) isShowCoverImage.value = true
})

export const booksParams = computed(() => {
  const parameterMap: Record<string, boolean> = {
    author: isShowAuthor.value,
    coverImage: isShowCoverImage.value,
    rating: isShowRating.value,
    tags: isShowTags.value,
  }
  return Object.keys(parameterMap).filter((param) => parameterMap[param])
})
