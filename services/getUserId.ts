'use server'

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const getUserId = async () => {
  const supabase = createServerComponentClient({ cookies })
  try {
    const { data } = await supabase.auth.getSession()
    return data?.session?.user?.id
  } catch {
    return undefined
  }
}
