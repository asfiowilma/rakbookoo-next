'use client'

import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import React from 'react'
import { SiDiscord } from 'react-icons/si'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { toast } from 'react-hot-toast'
import { type Database } from '@/types/database'
import { type Provider } from '@supabase/supabase-js'

interface ThirdPartyAuthProvider {
  name: Provider
  icon: React.ReactNode
}

export const providers: ThirdPartyAuthProvider[] = [
  { name: 'google', icon: <FcGoogle /> },
  { name: 'discord', icon: <SiDiscord className="text-indigo-500" /> },
]
const ThirdPartyProviders = () => {
  const supabase = createClientComponentClient<Database>()

  const loginWithThirdParty = async (provider: Provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) toast.error('Terjadi kesalahan, coba sesaat lagi.')
  }

  return (
    <>
      <div className="divider">atau</div>
      <div className="grid grid-cols-1 w-full gap-2 sm:grid-cols-2 sm:w-auto">
        {providers.map((provider) => (
          <Button
            key={provider.name}
            type="button"
            title={`Login dengan ${provider.name}`}
            variant="secondary"
            className="sm:btn-sm"
            onClick={() => loginWithThirdParty(provider.name)}
          >
            {provider.icon} <span>{provider.name}</span>
          </Button>
        ))}
      </div>
    </>
  )
}

export default ThirdPartyProviders
