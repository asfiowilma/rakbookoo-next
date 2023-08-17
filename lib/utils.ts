import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const mod = (a: number, b: number): number => ((a % b) + b) % b

export function urlBuilder(path: string, params: { [key: string]: any }) {
  let searchParams = Object.entries(params)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')
  return `${path}?${searchParams}`
}
