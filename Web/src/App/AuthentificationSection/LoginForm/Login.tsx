import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function LoginForm({ register, handleSubmit, errors, onSubmit }: any) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center justify-center gap-5 w-full'
    >
      <TextField
        id='email-input'
        label='Email'
        variant='standard'
        {...register('email')}
        className='w-full'
        required
      />
      {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      <TextField
        id='password-input'
        label='Password'
        variant='standard'
        type='password'
        {...register('password')}
        className='w-full'
        required
      />
      {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
      <Button
        variant='contained'
        type='submit'
        value='Submit'
        className='w-full'
      >
        Submit
      </Button>
    </form>
  )
}
