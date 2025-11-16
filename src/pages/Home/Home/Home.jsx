import React from 'react'
import Banner from '../Banner/Banner'
import WorkSection from '../WorkSection/WorkSection'
import Services from '../Services/Services'
import Brands from '../Brands/Brands'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <WorkSection></WorkSection>
        <Services></Services>
        <Brands></Brands>
    </div>
  )
}

export default Home