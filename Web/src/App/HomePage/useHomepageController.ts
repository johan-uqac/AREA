import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../Common/Contexts/AccountContext'
import { useNavigate } from 'react-router-dom'
import USER_AREAS from '../../Common/hardData/users_areas'
import { AREA } from '../../Common/types/Area'

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

  const addArea = (area: AREA) => {
    const newAreas = [...areas, area]
    setAreas(newAreas)
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
