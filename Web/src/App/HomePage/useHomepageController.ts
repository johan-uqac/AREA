import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'
import USER_AREAS from '../../Common/hardData/users_areas'
import { v4 as uuidv4 } from 'uuid'
import { AREA } from '../../Common/types/Area'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import { removeDataFromCache } from '../../helpers/CacheManagement'
import { deleteAreaFromServer, getAreas, sendNewArea } from '../../Common/httpFunctions/create-areas'

export default function useHomepageController() {
  const { account, setAccount } = useContext(AccountContext)
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (account.email === '') {
      navigate('/')
    }
    getAreas(account.uid).then(res => {
      res.json().then(json => {
        if (res.status == 200) {
          console.log(json)
          setAccount({
            ...account,
            areas: json,
          })
        }
      })
    })
  }, [account.email, navigate])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const deleteArea = (id: string) => {
    const newAreas = account.areas.filter(area => area.id !== id)
    setAccount({
      ...account,
      areas: newAreas,
    })
    // TODO: deleteAreaFromServer(account.uid, id)
  }

  const addArea = (actionId: string, reactionId: string) => {
    const newArea = {
      id: uuidv4(),
      action: ACTIONS.find(action => action.id === actionId),
      reaction: REACTIONS.find(reaction => reaction.id === reactionId),
    } as AREA
    setAccount({
      ...account,
      areas: [...account.areas, newArea],
    })
    sendNewArea(actionId, account.uid)
  }

  const logOut = () => {
    setAccount({
      email: '',
      uid: '',
      accessToken: '',
      areas: [],
    })
    removeDataFromCache('area')
    navigate('/auth/login')
  }

  return {
    account,
    showModal,
    toggleModal,
    deleteArea,
    addArea,
    logOut,
  }
}
