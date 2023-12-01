import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  type?: 'primary' | 'secondary'
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  const primaryClassName =
    'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 hover:bg-teal-600 border border-transparent rounded-md shadow-sm hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-teal-600'

  const secondaryClassName =
    'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-slate-900 hover:bg-slate-900 border border-transparent rounded-md shadow-sm hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900'

  return (
    <button
      onClick={onClick}
      className={type === 'primary' ? primaryClassName : secondaryClassName}
    >
      {children}
    </button>
  )
}

export default Button
