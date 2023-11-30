import React from 'react'
import { Button, Fab, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import useHomepageController from './useHomepageController'
import { ACTIONS, REACTIONS } from '../../Common/areas'
import Area from '../Components/Area'
import ActionReactionModal from '../Components/CreateArea'

const Homepage = () => {
  const { account, areas, showModal, toggleModal } = useHomepageController()

  return (
    <div>
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Tp3<span className="text-teal-600">Web</span></span>
          </a>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-slate-900 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900">
            Log out
          </a>
        </div>
      </div>
    </section>
  
    <h1 className="flex justify-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl bg-white">
      <span className="block :inline ">Let&apos;s go !</span>
    </h1>
  
    <section className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
  
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
  
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1580034283351-073a1906f7ba?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie " />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">PSEUDO</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{account.email}</span>
                    <div className="flex mt-4 md:mt-6">
                      <button
                        title="Add New"
                        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                        onClick={toggleModal}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50px"
                          height="50px"
                          viewBox="0 0 24 24"
                          className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                        >
                          <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            strokeWidth="1.5"
                          ></path>
                          <path d="M8 12H16" strokeWidth="1.5"></path>
                          <path d="M12 16V8" strokeWidth="1.5"></path>
                        </svg>
                      </button>
  
                      {showModal && (
                        <ActionReactionModal
                          actions={ACTIONS}
                          reactions={REACTIONS}
                          onClose={toggleModal}
                          onConfirm={() => console.log('confirm')}
                        />
                      )}
  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
  
              <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
  
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="" alt="area " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        action
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        reaction
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900">
                        Delete
                      </a>
                    </div>
                  </div>
                </li>
  
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="" alt="area " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        action
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        reaction
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900">
                        Delete
                      </a>
                    </div>
                  </div>
                </li>
  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  

    
      /* <div className='flex justify-center items-center mb-4'>
        <Typography
          variant='h4'
          className='font-bold'
        >
          Bon retour, {account.email}
        </Typography>
      </div>

      <Grid
        container
        spacing={4}
      >
        {areas.map((area, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Area area={area} />
          </Grid>
        ))}
      </Grid>

      <div className='flex justify-center mt-4'>
        <Fab
          color='primary'
          onClick={toggleModal}
        >
          <AddIcon />
        </Fab>
      </div>

      {showModal && (
        <ActionReactionModal
          actions={ACTIONS}
          reactions={REACTIONS}
          onClose={toggleModal}
          onConfirm={() => console.log('confirm')}
        />
      )}
    </div> */
  )
}

export default Homepage
