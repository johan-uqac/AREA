import { initializeApp } from 'firebase/app'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthentificationSection from './App/AuthentificationSection/AuthentificationSection'
import ErrorPage from './ErrorPage'
import Homepage from './App/HomePage/Homepage'
import { AccountProvider } from './Common/Contexts/AccountProvider'
import firebaseConfig from './firebaseConfig'
import LandingPage from './App/LandingPage/LandingPage'

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
            element={<LandingPage />}
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
