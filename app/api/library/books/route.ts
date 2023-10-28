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
  const display = searchParams.get('display')
  const displayMap = display
    ?.split(',')
    .reduce<{ [key: string]: true }>(
      (map, d, _i) => ({ ...map, [d]: true }),
      {}
    )

  return NextResponse.json(
    await prisma.book.findMany({
      select: {
        id: true,
        title: true,
        coverImage: displayMap?.coverImage,
        rating: displayMap?.rating,
        authors: displayMap?.author
          ? {
              take: view === LibraryView.thumbnail ? 1 : undefined,
            }
          : undefined,
        tags: displayMap?.tags,
      },
      where: {
        ownerId: sessionData?.session?.user.id,
      },
    })
  )
}
