import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  color?: string
}

const Button = ({ children, onClick, color = 'slate-900' }: ButtonProps) => {
  const defaultClassName =
    'inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-slate-900 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900'

  const backgroundColor = `bg-${color}`
  const hoverBackgroundColor = `hover:bg-${color}`
  const hoverRingColor = `hover:ring-${color}`
  const className = `${defaultClassName} ${backgroundColor} ${hoverBackgroundColor} ${hoverRingColor}`

  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button
