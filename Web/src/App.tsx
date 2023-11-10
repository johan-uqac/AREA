import { initializeApp } from 'firebase/app'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthentificationSection from './App/AuthentificationSection/AuthentificationSection'
import ErrorPage from './ErrorPage'
import Homepage from './App/HomePage/Homepage'
import { AccountProvider } from './Common/httpFunctions/Contexts/AccountProvider'
import firebaseConfig from './firebaseConfig'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default function App() {
  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            index
            element={<Navigate to='/auth' />}
          />
          <Route
            path='/auth/*'
            index
            element={<AuthentificationSection />}
          />
          <Route
            path='/home'
            element={<Homepage />}
          />
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </Router>
    </AccountProvider>
  )
}
