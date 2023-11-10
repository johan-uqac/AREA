import { Button } from '@mui/material'
import useHomepageController from './useHomepageController'

export default function Homepage() {
  const { account, loading, status, getUserInfo } = useHomepageController()

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div>
          <h1>{'Homepage of ' + account.email}</h1>
          <h2>{'Status of request: ' + status}</h2>
          <Button onClick={getUserInfo}>Get User Info</Button>
        </div>
      )}
    </div>
  )
}
