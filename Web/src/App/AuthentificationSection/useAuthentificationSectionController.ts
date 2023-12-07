import { SubmitHandler, set, useForm } from 'react-hook-form'
import { checkIfUserExists, login, subscribe } from '../../Common/httpFunctions/authentification'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
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
    login(email, password).then(res => {
      res.json().then(json => {
        if (res.status == 406) {
          console.log(json)
          if (json.message == 'Wrong password') {
            console.log(json.message)
            setError('password', { message: 'Le mot de passe est invalide' })
            return false
          } else if (json.message == 'Please enter a valid email') {
            setError('email', { message: 'Email invalide' })
            return false
          } else if (json.message == 'user not exist') {
            setError('email', { message: "Aucun compte n'est relié à cet email" })
          } else {
            setError('email', { message: 'Une erreur est survenue' })
          }
        } else {
          console.log(json[0]._id)
          setAccount({
            ...account,
            email: json[0].email,
            uid: json[0]._id,
          })
          addDataIntoCache('area', {
            email: json[0].email,
            uid: json[0]._id,
            password: json[0].password,
          })
          navigate('/home')
        }
      })
    })
  }

  function subscribeUser(data: SubscribeUser) {
    if (data.password !== data.passwordConfirmation) {
      setError('passwordConfirmation', { message: 'Les mots de passe sont différents' })
      return
    }
    subscribe(data.email, data.password)
      .then(res => {
        if (res.status == 406) {
          console.log(res)
          res
            .clone()
            .json()
            .then(json => {
              if (json.message == 'user already exist') {
                setError('email', { message: 'Email déjà utilisé' })
              } else if (json.message == 'invalid email') {
                setError('email', { message: 'Email invalide' })
              }
            })
        }
        return res.json()
      })
      .then(json => {
        console.log(json)
        setAccount({
          ...account,
          email: json.email,
          uid: json._id,
        })
        addDataIntoCache('area', {
          email: json.email,
          uid: json._id,
          password: json.password,
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
