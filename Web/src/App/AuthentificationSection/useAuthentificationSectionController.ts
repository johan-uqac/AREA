import { SubmitHandler, set, useForm } from 'react-hook-form'
import { checkIfUserExists, login, subscribe } from '../../Common/httpFunctions/authentification'
import { UserCredential } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AccountContext, AccountType } from '../../Common/Contexts/AccountContext'
import { addDataIntoCache, getDataFromCache } from '../../helpers/CacheManagement'
import { json } from 'stream/consumers'

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
    fetch('http://localhost:8080/user/sign-in', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password        
      })
    }).then((res) => {
      if (res.status == 406) {
        res.clone().json().then((json) => {
          console.log(json)
          if (json.message == 'Wrong password') {
            console.log(json.message)
            setError('password', { message: 'Le mot de passe est invalide' })
            return false
          } else if (json.message == 'Please enter a valid email') {
            setError('email', { message: 'Email invalide' })
            return false
          } else if (json.message == 'user not exist') {
            setError('email', {message: 'cet utilisateur existe pas'})
          }
        })
      }
      return res.json();
    }).then((json) => {
      console.log(json)
        setAccount({
          ...account,
          email: email,
          uid: json._id,
        })
        addDataIntoCache('area', {
          mail: json.email,
          uid: json._id,
          password: json.password
        })
        navigate('/home')
    })
  }

  function subscribeUser(data: SubscribeUser) {
    if (data.password !== data.passwordConfirmation) {
      setError('passwordConfirmation', { message: 'Les mots de passe sont différents' })
      return
    }
    fetch('http://localhost:8080/user/sign-up', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password        
      })
    }).then((res) => {
      if (res.status == 406) {
        console.log(res)
        res.json().then((json) => {
          if (json.message == 'user already exist') {
            setError('email', { message: 'Email déjà utilisé' })
          } else if (json.message == 'invalid email') {
            setError('email', { message: 'Email invalide' })
          }
        })
      }
      return res.json()
    }).then((json) => {
      console.log(json)
        setAccount({
          ...account,
          email: data.email,
          uid: json._id,
        })
        addDataIntoCache('area', {
          mail: json.email,
          uid: json._id,
          password: json.password
        })
        navigate('/home')
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
