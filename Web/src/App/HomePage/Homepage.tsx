import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import Area from '../Components/Area'
import ActionReactionModal from '../Components/CreateArea'

export default function Homepage() {
  const { account, areas, showModal, toggleModal } = useHomepageController()

  return (
    <div className='w-screen pt-6'>
      <button onClick={toggleModal}>ADD AREA</button>
      <h1 className='text-xl font-bold font-sans text-center'>{'Bon retour, ' + account.email}</h1>
      <h3>Voici les AREAs que vous avez définies</h3>
      {areas.map((area, index) => (
        <div key={index}>
          <Area area={area} />
        </div>
      ))}
      {showModal && (
        <ActionReactionModal
          actions={ACTIONS}
          reactions={REACTIONS}
          onClose={toggleModal}
          onConfirm={() => console.log('confirm')}
        />
      )}
    </div>
  )
}
