'use server'

import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const getUserId = async () => {
  const supabase = createServerComponentClient({ cookies })
  try {
    const { data: session } = await supabase.auth.getSession()
    return session
  } catch {
    return null
  }
}
