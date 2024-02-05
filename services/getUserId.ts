import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const dynamic = 'force-dynamic'

export const getUserId = (): Promise<string | undefined> => {
  const supabase = createServerComponentClient({ cookies })
  return new Promise(async (resolve) => {
    try {
      const { data } = await supabase.auth.getSession()
      resolve(data?.session?.user?.id)
    } catch {
      resolve(undefined)
    }
  })
}
