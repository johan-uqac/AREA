import React from 'react'

type AuthentificationLayoutProps = {
  children: React.ReactNode
  title: string
}

export default function AuthentificationLayout({ children, title }: AuthentificationLayoutProps) {
  const assets = {
    pic: require('../../assets/pic.png'),
    backgroundImage: require('../../assets/background.jpg'),
  }
  var sectionStyle = {
    backgroundImage: `url(${assets.backgroundImage})`,
  }
  return (
    <div
      className='bg-image'
      style={sectionStyle}
    >
      <section className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0'>
        <div className='md:w-1/3 max-w-sm'>
          <img
            src={assets.pic}
            alt='Illustration'
          />
        </div>
        <div className='md:w-1/3 max-w-sm mx-16 px-8 py-4 bg-gray-300 bg-opacity-70 rounded'>
          <div className='text-center md:text-center'>
            <span className='mr-1 font-bold text-2xl'>{title === 'login' ? 'Se connecter' : "S'inscrire"}</span>
          </div>
          <div className='my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
            <span className=''>{title === 'login' ? 'Re-bonjour!' : 'Rejoins nous!'}</span>
          </div>
          {children}
          <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
            {title === 'login' ? 'Pas encore de compte?' : 'Déjà un compte?'}{' '}
            <a
              className='text-teal-600 hover:underline hover:underline-offset-4'
              href={title === 'login' ? './subscribe' : './login'}
            >
              {title === 'login' ? "S'inscrire" : 'Se connecter'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
