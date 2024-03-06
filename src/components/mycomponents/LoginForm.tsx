import ButtonSubmit from '@/components/mycomponents/ButtonSubmit'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {}

const LoginForm = (props: Props): JSX.Element => {
  return (
    <form action=''>
      <Label>
        <span>Username</span>
        <Input type='text' required placeholder='e.g johndoe' />
      </Label>
      <Label>
        <span>Password</span>
        <Input type='password' required placeholder='Password' />
      </Label>
      <ButtonSubmit size='lg' text='Login' variant='default' />
    </form>
  )
}

export default LoginForm
