import React from 'react'

export default function SubscribeForm({ register, handleSubmit, errors, onSubmit }: any) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
        type='text'
        placeholder='Adresse email'
        {...register('email')}
      />
      {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      <input
        className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
        type='password'
        placeholder='Mot de passe'
        {...register('password')}
      />
      {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
      <input
        className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
        type='password'
        placeholder='Confirmation du mot de passe'
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && <span className='text-red-500'>{errors.passwordConfirmation.message}</span>}
      <div className='text-center md:text-center'>
        <button
          className='mb-2 mt-6 w-[150px] bg-black h-[50px] rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-teal-600 before:to-[rgb(13,148,136)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-slate-50'
          type='submit'
        >
          S&apos;inscrire
        </button>
      </div>
    </form>
  )
}
