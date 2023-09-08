'use client'

import type { BookWithAuthor } from '@/types/books'
import { api } from '@/lib/routes'
import axios from 'axios'
import { urlBuilder } from '@/lib/utils'
import { useLibraryView } from '@/lib/hooks/useLibraryView'
import { useQuery } from '@tanstack/react-query'

const useBooks = (initBooks: BookWithAuthor[]) => {
  const { view } = useLibraryView()

  return useQuery({
    initialData: initBooks,
    queryKey: ['books'],
    queryFn: async () => {
      const res = await axios.get<BookWithAuthor[]>(
        urlBuilder(api.getBooks, { view })
      )
      return res.data
    },
  })
}

export default useBooks
