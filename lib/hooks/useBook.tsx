import { bookId, isBookModalOpen } from '../signals/book'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { RESET_BOOK_ID } from '../constants/book'
import { urlBuilder } from '../utils'

export const useBook = () => {
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
    isBookModalOpen.value = to
    if (!to) {
      router.replace(getBookRoute())
      setBookId(RESET_BOOK_ID)
    }
  }

  const setBookId = (to: string) => {
    bookId.value = to
    if (to !== RESET_BOOK_ID) router.replace(getBookRoute(to))
  }

  return { setBookModalOpen, setBookId }
}
