'use client'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

interface Props {
  text: string
  size: 'sm' | 'lg' | 'icon' | 'default'
  variant: 'default' | 'outline' | 'link'
}

const ButtonSubmit = ({
  text,
  size = 'default',
  variant = 'default'
}: Props): JSX.Element => {
  const { pending } = useFormStatus()
  return (
    <Button
      disabled={pending}
      type='submit'
      variant={variant}
      size={size}
      className='w-fit rounded-2xl bg-[var(--accent)] px-8 py-2 
            font-medium text-[var(--accent-foreground)] hover:bg-primary hover:text-primary-foreground'
    >
      {text}
    </Button>
  )
}

export default ButtonSubmit
