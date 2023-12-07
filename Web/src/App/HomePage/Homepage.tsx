import React from 'react'
import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import ActionReactionModal from '../Components/CreateArea'
import AreasView from './Views/AreaView'
import AccountView from './Views/AccountView'
import HeaderView from './Views/HeaderView'

const Homepage = () => {
  const { account, showModal, toggleModal, deleteArea, addArea, logOut } = useHomepageController()

  return (
    <div>
      <HeaderView logOut={logOut} />

      <h1 className='flex justify-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl bg-white'>
        <span className='block :inline '>C&apos;est parti !</span>
      </h1>

      <section className='px-2 py-32 bg-white md:px-0'>
        <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
          <div className='flex flex-wrap items-center sm:-mx-3'>
            <AccountView
              account={account}
              toggleModal={toggleModal}
            />
            <AreasView
              areas={account.areas}
              deleteArea={deleteArea}
            />
          </div>
        </div>
      </section>
      {showModal && (
        <ActionReactionModal
          actions={ACTIONS}
          reactions={REACTIONS}
          onClose={toggleModal}
          onConfirm={addArea}
        />
      )}
    </div>
  )
}

export default Homepage
