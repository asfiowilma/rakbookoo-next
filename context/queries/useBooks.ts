'use client'

import type { BookWithAuthor } from '@/types/books'
import { api } from '@/lib/routes'
import axios from 'axios'
import { urlBuilder } from '@/lib/utils'
import { useBooksViewOptionsStore } from '@/lib/hooks/useBooksViewOption'
import { useLibraryView } from '@/lib/hooks/useLibraryView'
import { useQuery } from '@tanstack/react-query'

const useBooks = (initBooks: BookWithAuthor[]) => {
  const { view } = useLibraryView()
  const { showAuthor, showCoverImage, showRating, showTags } =
    useBooksViewOptionsStore()

  const displayParamBuilder = () => {
    const display = []
    if (showAuthor) display.push('author')
    if (showCoverImage) display.push('coverImage')
    if (showRating) display.push('rating')
    if (showTags) display.push('tags')
    return display
  }

  return useQuery({
    initialData: initBooks,
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get<BookWithAuthor[]>(
        urlBuilder(api.getBooks, { view, display: displayParamBuilder() })
      )
      return res.data
    },
  })
}

export default useBooks
