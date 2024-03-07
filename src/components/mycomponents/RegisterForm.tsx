'use client'
import ButtonSubmit from '@/components/mycomponents/ButtonSubmit'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormStatus } from 'react-dom'

const RegisterForm = (): JSX.Element => {
  const { pending } = useFormStatus()
  return (
    <form
      action=''
      className='flex flex-col gap-8'
      style={{ opacity: pending ? 0.5 : 1 }}
    >
      <Label className='text-lg font-semibold text-foreground'>
        <span>Email</span>
        <Input
          className='w-full text-xl font-normal'
          name='email'
          type='email'
          required
          placeholder='e.g johndoe@gmail.com'
        />
      </Label>
      <Label>
        <span className='text-lg font-semibold text-foreground'>Password</span>
        <Input
          className='w-full text-xl font-normal'
          name='password'
          type='password'
          required
          placeholder='8 characters minimum'
          minLength={8}
          maxLength={20}
        />
      </Label>
      <Label>
        <span className='text-lg font-semibold text-foreground'>
          Confirm Password
        </span>
        <Input
          className='w-full text-xl font-normal'
          name='confirmPassword'
          type='password'
          required
          placeholder='8 characters minimum'
          minLength={8}
          maxLength={20}
        />
      </Label>
      <div className='flex justify-center gap-4'>
        <ButtonSubmit size='sm' text='Register' variant='default' />
      </div>
    </form>
  )
}

export default RegisterForm
