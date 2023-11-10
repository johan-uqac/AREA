import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function SubscribeForm({ register, handleSubmit, errors, onSubmit }: any) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center justify-center gap-5 w-full'
    >
      <TextField
        id='email-input'
        label='Email'
        variant='standard'
        className='w-full'
        required
        {...register('email')}
      />
      {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      <TextField
        id='password-input'
        label='Password'
        variant='standard'
        type='password'
        className='w-full'
        required
        {...register('password')}
      />
      {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
      <TextField
        id='password-confirmation-input'
        label='Password confirmation'
        variant='standard'
        type='password'
        className='w-full'
        required
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && <span className='text-red-500'>{errors.passwordConfirmation.message}</span>}
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
