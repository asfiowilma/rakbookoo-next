import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'

export const queryClient = new QueryClient()

const RakQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default RakQueryClientProvider
