import { type PrismaClient } from '@prisma/client'

// global.d.ts
declare global {
  var prisma: PrismaClient
  var supabase: any
}

export {}
