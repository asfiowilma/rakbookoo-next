interface Params {
  [key: string]: string | string[] | undefined
}

interface PageProps {
  params?: Params
  searchParams?: Params
}
