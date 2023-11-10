import { useContext } from 'react'
import { AccountContext } from '../../Common/httpFunctions/Contexts/AccountContext'

export default function Homepage() {
  const { account } = useContext(AccountContext)
  return (
    <div>
      <h1>{'Homepage of ' + account.email}</h1>
    </div>
  )
}
