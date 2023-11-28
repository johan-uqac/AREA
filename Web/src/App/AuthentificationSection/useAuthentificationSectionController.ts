import { SubmitHandler, useForm } from 'react-hook-form'
import { checkIfUserExists, login, subscribe } from '../../Common/httpFunctions/authentification'
import { UserCredential } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AccountContext, AccountType } from '../../Common/Contexts/AccountContext'
import { addDataIntoCache, getDataFromCache } from '../../helpers/CacheManagement'

type AuthForm = {
  email: string
  password: string
  passwordConfirmation: string
}

type LoginUser = {
  email: string
  password: string
}

type SubscribeUser = LoginUser & {
  passwordConfirmation: string
}

export default function useAuthentificationSectionController() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<AuthForm>()
  const location = useLocation()
  const navigate = useNavigate()
  const { account, setAccount } = useContext(AccountContext)

  useEffect(() => {
    var cacheData = getDataFromCache('area')
    if (cacheData && cacheData.mail && cacheData.uid && cacheData.password) {
      if (checkIfUserExists(cacheData.uid)) {
        setAccount({
          ...account,
          email: cacheData.mail,
          uid: cacheData.uid,
          accessToken: cacheData.accessToken,
        })
        navigate('/home')
      }
    }
  }, [])

  function getSection() {
    return location.pathname.split('/').pop() ?? 'error'
  }

  function loginUser({ email, password }: LoginUser) {
    login(email, password)
      .then((userCredential: UserCredential) => {
        setAccount({
          ...account,
          email: userCredential.user.email ?? 'unknown',
          uid: userCredential.user.uid,
          accessToken: userCredential.user.refreshToken,
        })
        addDataIntoCache('area', {
          mail: userCredential.user.email,
          uid: userCredential.user.uid,
          password: btoa(password),
          accessToken: userCredential.user.refreshToken,
        })
        navigate('/home')
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            setError('email', { message: 'Email not found' })
            break
          case 'auth/wrong-password':
            setError('password', { message: 'Wrong password' })
            break
          default:
            console.log(error.code)
            setError('email', { message: 'Unknown error' })
            break
        }
      })
  }

  function subscribeUser(data: SubscribeUser) {
    if (data.password !== data.passwordConfirmation)
      setError('passwordConfirmation', { message: 'Passwords do not match' })

    subscribe(data.email, data.password)
      .then((userCredential: UserCredential) => {
        setAccount({
          ...account,
          email: userCredential.user.email ?? 'unknown',
          uid: userCredential.user.uid,
          accessToken: userCredential.user.refreshToken,
        })
        // addDataIntoCache('area', {
        //   mail: userCredential.user.email,
        //   uid: userCredential.user.uid,
        //   password: btoa(data.password),
        //   accessToken: userCredential.user.refreshToken,
        // })
        navigate('/home')
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('email', { message: 'Email already in use' })
            break
          case 'auth/weak-password':
            setError('password', { message: 'Weak password' })
            break
          case 'auth/invalid-email':
            setError('email', { message: 'Invalid email' })
            break
        }
      })
  }

  const onSubmit: SubmitHandler<AuthForm> = data => {
    if (getSection() === 'login') {
      loginUser({ email: data.email, password: data.password })
    } else {
      subscribeUser({ email: data.email, password: data.password, passwordConfirmation: data.passwordConfirmation })
    }
  }

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    section: getSection(),
  }
}
