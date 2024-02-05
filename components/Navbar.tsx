import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import SignOutButton from './auth/SignOutButton'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'
import { routes } from '@/lib/routes'

const getUser = async () => {
  const userId = await getUserId()
  if (!userId) return null

  return await prisma.user.findUnique({
    where: { uid: userId },
  })
}

const Navbar = async () => {
  const user = await getUser()

  if (user == null) return <></>

  return (
    <div className="navbar navbar-end w-full px-6">
      {!!user ? (
        <>
          <div className="mr-2 font-medium">{user?.name}</div>
          <div className="dropdown dropdown-end">
            <Avatar tabIndex={0} className="h-10 w-10 rounded-full">
              <AvatarImage src={user?.avatar_url ?? ''} />
              <AvatarFallback>{user?.name ?? ''}</AvatarFallback>
            </Avatar>
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content rounded-box mt-3 w-52 bg-base-200 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Button asChild>
          <Link href={routes.register}>Daftar</Link>
        </Button>
      )}
    </div>
  )
}

export default Navbar
