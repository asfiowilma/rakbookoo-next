import { LibraryView } from '@/lib/enums'
import { NextResponse } from 'next/server'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'

export async function GET(request: Request) {
  const { data: sessionData, error } = await getUserId()

  if (!sessionData || error)
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const view = searchParams.get('view')

  return NextResponse.json(
    await prisma.book.findMany({
      include: {
        Author: {
          take: view === LibraryView.thumbnail ? 1 : undefined,
          select: {
            name: true,
          },
        },
      },
      where: {
        Shelf: {
          userUid: sessionData?.session?.user.id,
        },
      },
    })
  )
}
