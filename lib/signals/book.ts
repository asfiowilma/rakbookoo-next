import { BookDetails } from '@/types/books'
import { signal } from '@preact/signals-react'

export const bookId = signal<string>('')
export const book = signal<Partial<BookDetails> | null>(null)
export const isBookModalOpen = signal<boolean>(false)
