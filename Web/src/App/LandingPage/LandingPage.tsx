import React from 'react'
import Discover from './Views/Discover'
import Description from './Views/Description'
import AboutUs from './Views/AboutUs'
import Header from './Views/Header'
import useLandingPageController from './useLandingPageController'

export default function LandingPage() {
  useLandingPageController()

  return (
    <>
      <Header />
      <Discover />
      <Description />
      <AboutUs />
    </>
  )
}
