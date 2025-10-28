import { mockDataModal } from '@/data/content'
import { ICardData } from '@/types/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// // Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
// export const getToday = function (options = {}) {
//   const today = new Date()

//   // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
//   if (options?.end)
//     // Set to the last second of the day
//     today.setUTCHours(23, 59, 59, 999)
//   else today.setUTCHours(0, 0, 0, 0)
//   return today.toISOString()
// }

export const STORAGE_KEY = 'my_files'

export function getStoredFiles(): ICardData[] {
  const files = localStorage.getItem(STORAGE_KEY)
  return files ? JSON.parse(files) : mockDataModal
}

export function saveStoredFiles(files: ICardData[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(files))
}
