import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm/Login'
import useAuthentificationSectionController from './useAuthentificationSectionController'
import AuthentificationLayout from './AuthentificationLayout'
import SubscribeForm from './SubscribeForm/Subscribe'

export default function AuthentificationSection() {
  const { register, handleSubmit, onSubmit, errors, section } = useAuthentificationSectionController()

  return (
    <AuthentificationLayout title={section}>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/auth/subscribe' />}
        />
        <Route
          path='/login'
          element={
            <LoginForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
            />
          }
        />
        <Route
          path='/subscribe'
          element={
            <SubscribeForm
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
            />
          }
        />
      </Routes>
    </AuthentificationLayout>
  )
}
