import { type PrismaClient } from '@prisma/client'

// global.d.ts
declare global {
  var supabase: any
}

// Allow TypeScript to import SVG files using Webpack's `svgr` loader.
declare module '*.svg' {
  import React from 'react'
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

export {}
