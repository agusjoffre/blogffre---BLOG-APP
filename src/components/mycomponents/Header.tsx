'use server'
import Link from 'next/link'
import { auth, UserButton, currentUser } from '@clerk/nextjs'
import ModeToggle from './ToggleTheme'
import { Button } from '@/components/ui/button'

const Header = async (): Promise<JSX.Element> => {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <header className='flex w-full items-center gap-14 border-b-[1px] border-b-foreground bg-background px-14 py-8 md:flex-row md:justify-between'>
      <article className='flex items-center gap-8'>
        <Link href='/'>
          <h1 className='text-3xl font-bold'>Blogffre</h1>
        </Link>
        {userId != null ? (
          <Link href='/create'>
            <Button
              size={'sm'}
              className='rounded-2xl bg-[var(--accent)] px-8 py-2 font-medium text-[var(--accent-foreground)] hover:bg-primary hover:text-primary-foreground'
            >
              Crear post
            </Button>
          </Link>
        ) : (
          <Link href='/create'>
            <Button
              size={'sm'}
              disabled
              variant={'outline'}
              className='rounded-2xl px-8 py-2 font-medium'
            >
              Crear post
            </Button>
          </Link>
        )}
      </article>

      <nav className='flex w-full md:flex-row md:items-center md:justify-center'>
        <ul className='flex md:flex-row md:items-center md:justify-between'>
          {userId != null && (
            <li>
              <Link href='/posts/myposts'>
                <Button variant={'link'}>Mis articulos</Button>
              </Link>
            </li>
          )}
          <li>
            <Link href='/about'>
              <Button variant={'link'}>Sobre mi / About me</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <section className='flex gap-4 md:flex-row md:items-center md:justify-center'>
        {userId != null ? (
          <>
            <UserButton afterSignOutUrl='/' />
            <h3 className='animate-pulse text-sm font-light duration-1000'>
              Hola 👋,{' '}
              <span className='font-semibold'>
                {user?.username != null ? user?.username : user?.firstName}
              </span>
            </h3>
          </>
        ) : (
          <>
            <Link href='/auth/register'>
              <Button size={'sm'} variant={'link'} className='rounded-2xl'>
                Crear cuenta
              </Button>
            </Link>
            <Link href='/auth/login'>
              <Button size={'sm'} className='rounded-2xl'>
                Iniciar sesion
              </Button>
            </Link>
          </>
        )}
      </section>
      <ModeToggle />
    </header>
  )
}

export default Header
