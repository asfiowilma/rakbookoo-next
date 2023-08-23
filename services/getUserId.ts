import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const getUserId = () => {
  const supabase = createServerComponentClient({ cookies })
  return supabase.auth.getSession()
}

export default getUserId
