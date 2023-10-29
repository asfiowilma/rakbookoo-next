import { BookDetails } from '@/types/books'
import { RESET_BOOK_ID } from '@/lib/constants/book'
import { api } from '@/lib/routes'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useGetBookDetailsQuery = (bookId: string) => {
  return useQuery({
    queryKey: ['book', { bookId }],
    queryFn: async () => {
      const res = await axios.get<BookDetails>(api.getBookDetails(bookId))
      return res.data
    },
    enabled: bookId !== RESET_BOOK_ID,
  })
}

export default useGetBookDetailsQuery
