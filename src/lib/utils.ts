import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type Post } from './types'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}


