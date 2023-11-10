import { Card, Link } from '@mui/material'

type AuthentificationLayoutProps = {
  children: React.ReactNode
  title: string
}

export default function AuthentificationLayout({ children, title }: AuthentificationLayoutProps) {
  return (
    <div className='flex flex-col items-center justify-center bg-violet-200 h-screen'>
      <Card className='flex flex-col items-center justify-center bg-orange-200 p-10 w-1/4'>
        <h1 className='text-xl capitalize'>{title}</h1>
        {children}
        <Link href={title === 'login' ? './subscribe' : './login'}>
          {title === 'login' ? 'Create an account' : 'Connect to your account'}
        </Link>
      </Card>
    </div>
  )
}
