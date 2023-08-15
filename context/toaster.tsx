'use client'

import { Toaster } from 'react-hot-toast'

export default function ToasterProvider() {
  return <Toaster toastOptions={{ position: 'bottom-center' }} />
}
