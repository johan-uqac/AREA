import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { checkIfUserExists } from '../../Common/httpFunctions/authentification'
import { getDataFromCache } from '../../helpers/CacheManagement'

const useLandingPageController = () => {
  const { account, setAccount } = useContext(AccountContext)
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
  }, [])

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
}

export default useLandingPageController
