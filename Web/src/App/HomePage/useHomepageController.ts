import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'

export default function useHomepageController() {
  const { account, setAccount } = useContext(AccountContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (account.email === '') {
      navigate('/')
    }
  }, [account.email, navigate])

  return {
    account,
  }
}
