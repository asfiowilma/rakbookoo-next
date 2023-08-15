'use client'

import { Button } from '../ui/button'
import { Database } from '@/types/database'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const SignOutButton = () => {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return <Button onClick={handleSignOut}>Sign out</Button>
}

export default SignOutButton
