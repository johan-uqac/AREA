import { SubmitHandler, useForm } from 'react-hook-form'
import { checkIfUserExists, login, subscribe } from '../../Common/httpFunctions/authentification'
import { UserCredential } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AccountContext, AccountType } from '../../Common/Contexts/AccountContext'
import { addDataIntoCache, getDataFromCache } from '../../helpers/CacheManagement'
import axios from 'axios'

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
    // axios.post('http://localhost:8080/users', {
    //   email: email,
    //   password: password
    // }).then((res: any) => {
    //   setAccount({
    //     ...account,
    //     email: email,
    //     uid: res.userId,
    //   })
    //   addDataIntoCache('area', {
    //     mail: email,
    //     uid: res.userId,
    //     password: password
    //   })
    //   navigate('/home')
    // })
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
            setError('email', { message: "Aucun compte n'est relié à cet email" })
            break
          case 'auth/wrong-password':
            setError('password', { message: 'Mot de passe incorrect' })
            break
          default:
            console.log(error.code)
            setError('email', { message: 'Erreur inconnue' })
            break
        }
      })
  }

  function subscribeUser(data: SubscribeUser) {
    if (data.password !== data.passwordConfirmation) {
      setError('passwordConfirmation', { message: 'Les mots de passe sont différents' })
      return
    }
    console.log(data)
    // subscribe(data.email, data.password)
    //   .then((userCredential: UserCredential) => {
    //     setAccount({
    //       ...account,
    //       email: userCredential.user.email ?? 'unknown',
    //       uid: userCredential.user.uid,
    //       accessToken: userCredential.user.refreshToken,
    //     })
    //     addDataIntoCache('area', {
    //       mail: userCredential.user.email,
    //       uid: userCredential.user.uid,
    //       password: btoa(data.password),
    //       accessToken: userCredential.user.refreshToken,
    //     })
    //     navigate('/home')
    //   })
    fetch('http://localhost:8080/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password        
      })
    }).then((res: any) => {
      console.log(res)
      setAccount({
        ...account,
        email: data.email,
        uid: res.userId,
      })
      addDataIntoCache('area', {
        mail: data.email,
        uid: res.userId,
        password: data.password
      })
      navigate('/home')
    })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('email', { message: 'Email déjà utilisé' })
            break
          case 'auth/weak-password':
            setError('password', { message: 'Mot de passe faible' })
            break
          case 'auth/invalid-email':
            setError('email', { message: 'Email invalide' })
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
