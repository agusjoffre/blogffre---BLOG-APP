import { SignIn } from '@clerk/nextjs'
const LoginPage = (): JSX.Element => {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <SignIn afterSignInUrl={'/'}/>
    </main>
  )
}

export default LoginPage
