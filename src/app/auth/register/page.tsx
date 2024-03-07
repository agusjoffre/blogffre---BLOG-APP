import RegisterForm from '@/components/mycomponents/RegisterForm'
import { Button } from '@/components/ui/button'
const RegisterPage = (): JSX.Element => {
  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <section
        className='flex flex-col items-center gap-4 
      border-[1px] border-dashed border-muted-foreground
       px-16 py-32 shadow-2xl'
      >
        <Button size={'lg'} className='bg-foreground text-lg'>
          Create account with Google
        </Button>
        <Button size={'lg'} className='bg-foreground text-lg'>
          Create account with Email
        </Button>
        <p>or</p>
        <RegisterForm />
      </section>
    </main>
  )
}

export default RegisterPage
