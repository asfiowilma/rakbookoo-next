import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import React from 'react'
import SignOutButton from './auth/SignOutButton'
import getUserId from '@/services/getUserId'
import prisma from '@/services/prisma'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'

const Navbar = async () => {
  const { data: sessionData, error } = await getUserId()
  if (error) {
    toast.error('Silakan login terlebih dahulu~')
    redirect('/auth/login')
  }

  const user = await prisma.user
    .findUnique({
      where: { uid: sessionData.session?.user.id },
      select: { name: true, avatar_url: true },
    })
    .catch((res) => console.error(res))

  return (
    <div className="navbar navbar-end w-full px-6">
      <div className="mr-2 font-medium">{user?.name}</div>
      <div className="dropdown dropdown-end">
        <Avatar tabIndex={0}>
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
    </div>
  )
}

export default Navbar
