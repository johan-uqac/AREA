import { useEffect } from 'react'
import AOS from 'aos'
import Discover from './Views/Discover'
import Description from './Views/Description'
import AboutUs from './Views/AboutUs'
import Header from './Views/Header'

export default function LandingPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <Discover />
      <Description />
      <AboutUs />
    </>
  )
}
