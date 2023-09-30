import { LibraryView } from '@/lib/enums'
import { NextResponse } from 'next/server'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const sessionData = await getUserId()

  if (!sessionData)
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const view = searchParams.get('view')
  const display = searchParams.get('display')?.split(',')

  return NextResponse.json(
    await prisma.book.findMany({
      select: {
        id: true,
        title: true,
        coverImage: display?.includes('coverImage'),
        rating: display?.includes('rating'),
        Author: display?.includes('author')
          ? {
              take: view === LibraryView.thumbnail ? 1 : undefined,
            }
          : undefined,
        Tag: display?.includes('tags'),
      },
      where: {
        Shelf: {
          userUid: sessionData?.session?.user.id,
        },
      },
    })
  )
}
