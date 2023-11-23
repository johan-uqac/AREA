import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'

export default function Homepage() {
  const { account } = useHomepageController()

  return (
    <div className='w-screen pt-6'>
      <h1 className='text-xl font-bold font-sans text-center'>{'Bon retour, ' + account.email}</h1>
    </div>
  )
}
