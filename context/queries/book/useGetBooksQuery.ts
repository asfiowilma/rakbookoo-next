'use client'

import type { BookWithAuthor, BookWithAuthorAndTag } from '@/types/books'
import { booksParams, libraryView } from '../../../lib/signals/view'

import { api } from '@/lib/routes'
import axios from 'axios'
import { urlBuilder } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

const useGetBooksQuery = (initBooks: BookWithAuthorAndTag[]) => {
  return useQuery({
    initialData: initBooks,
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get<BookWithAuthorAndTag[]>(
        urlBuilder(api.getBooks, {
          view: libraryView.value,
          display: booksParams.value,
        })
      )
      return res.data
    },
  })
}

export default useGetBooksQuery
