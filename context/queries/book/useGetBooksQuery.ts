'use client'

import { booksParams, libraryView } from '../../../lib/signals/view'

import type { BookWithAuthor } from '@/types/books'
import { api } from '@/lib/routes'
import axios from 'axios'
import { urlBuilder } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

const useGetBooksQuery = (initBooks: BookWithAuthor[]) => {
  return useQuery({
    initialData: initBooks,
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get<BookWithAuthor[]>(
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
