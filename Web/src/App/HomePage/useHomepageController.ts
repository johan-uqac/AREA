import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'
import { get } from '../../Common/httpFunctions/requests'

export default function useHomepageController() {
  const { account, setAccount } = useContext(AccountContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (account.email === '') {
      navigate('/')
    }
  }, [account.email, navigate])

  function getUserInfo() {
    get(
      '/getUserInfo',
      new URLSearchParams({
        uid: account.uid,
        email: account.email,
      })
    )
      .then(res =>
        res.json().then(data => {
          setAccount({
            ...account,
            firebaseUid: data.firebaseUid,
          })
          console.log(data)
          setStatus(res.status)
          setLoading(false)
        })
      )
      .catch(err => console.error(err.message))
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return {
    account,
    loading,
    status,
    getUserInfo,
  }
}
