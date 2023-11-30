import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'
import USER_AREAS from '../../Common/hardData/users_areas'
import { v4 as uuidv4 } from 'uuid'
import { AREA } from '../../Common/types/Area'
import { ACTIONS, REACTIONS } from '../../Common/areas'

export default function useHomepageController() {
  const { account, setAccount } = useContext(AccountContext)
  const navigate = useNavigate()
  const [areas, setAreas] = useState(USER_AREAS)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (account.email === '') {
      navigate('/')
    }
  }, [account.email, navigate])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  const deleteArea = (id: string) => {
    const newAreas = areas.filter(area => area.id !== id)
    setAreas(newAreas)
  }

  const addArea = (actionId: string, reactionId: string) => {
    const newArea = {
      id: uuidv4(),
      action: ACTIONS.find(action => action.id === actionId),
      reaction: REACTIONS.find(reaction => reaction.id === reactionId),
    } as AREA
    setAreas([...areas, newArea])
  }

  return {
    account,
    areas,
    showModal,
    toggleModal,
    deleteArea,
    addArea,
  }
}
