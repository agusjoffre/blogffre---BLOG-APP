import { SignUp } from '@clerk/nextjs'
const RegisterPage = (): JSX.Element => {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <SignUp afterSignUpUrl={'/auth/login'}/>
    </main>
  )
  
}

export default RegisterPage
