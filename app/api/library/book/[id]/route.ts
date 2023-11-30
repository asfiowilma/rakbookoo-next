import { NextResponse } from 'next/server'
import { getUserId } from '@/services/getUserId'
import prisma from '@/services/prisma'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params.id)
    return NextResponse.json({ error: 'Book id not found' }, { status: 400 })

  const userId = await getUserId()

  if (!userId)
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })

  return NextResponse.json(
    await prisma.book.findUnique({
      include: {
        authors: true,
        tags: true,
        notes: true,
        shelf: true,
      },
      where: {
        id: params.id,
        ownerId: userId,
      },
    })
  )
}
