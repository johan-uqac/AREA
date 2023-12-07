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
    if (account.uid) {
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
    }
  }, [account.email, navigate])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const deleteArea = (id: string) => {
    account.areas.splice(
      account.areas.findIndex(area => area.id === id),
      1
    )
    const newAreas = account.areas
    console.log('new areas = ', newAreas)
    setAccount({
      ...account,
      areas: newAreas,
    })
    deleteAreaFromServer(account.uid, id)
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
    console.log(newArea.id)
    sendNewArea(actionId, newArea.id, account.uid)
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
