'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useQuery } from '@tanstack/react-query'

export const useAuth = () => {
  const supabase = createClientComponentClient()
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await supabase.auth.getSession()
      return data?.session
    },
  })
}
