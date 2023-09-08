import getUserId from './getUserId'

export const isLoggedIn = async () => {
  const session = await getUserId()
  return !!session?.data?.session
}
