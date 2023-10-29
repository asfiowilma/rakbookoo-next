import { type ClassValue, clsx } from 'clsx'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mod = (a: number, b: number): number => ((a % b) + b) % b

export function urlBuilder(
  path: string,
  params: { [key: string]: any } | URLSearchParams
) {
  const searchParams = new URLSearchParams(params)
  return `${path}?${searchParams.toString()}`
}

export const truncate = (text: string, length: number = 32) => {
  let output = text
  if (text && text.length > length) {
    output = output.substring(0, length) + '...'
  }
  return output
}
