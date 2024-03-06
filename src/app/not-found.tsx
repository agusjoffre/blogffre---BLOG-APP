import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NotFound = (): JSX.Element => {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center gap-8'>
          <div className='flex flex-col gap-4 items-center justify-center'>
              <h1 className='text-9xl font-bold'>404</h1>
              <h3 className='text-3xl font-medium'>Page not found</h3>
      </div>
      <Link href='/'>
        <Button className='rounded-xl' variant={'destructive'}>
          Back to Homepage
        </Button>
      </Link>
    </main>
  )
}

export default NotFound
