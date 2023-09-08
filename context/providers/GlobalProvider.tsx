'use client'

import RakQueryClientProvider from './RakQueryClientProvider'
import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RakQueryClientProvider>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster toastOptions={{ position: 'bottom-center' }} />
    </RakQueryClientProvider>
  )
}

export default GlobalProvider
