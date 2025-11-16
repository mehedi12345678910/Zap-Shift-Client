import React from 'react'
import Banner from '../Banner/Banner'
import WorkSection from '../WorkSection/WorkSection'
import Services from '../Services/Services'
import Brands from '../Brands/Brands'
import Reviews from '../Reviews/Reviews'

const reviewsPromise = fetch('/reviews.json').then(res=>res.json())
const Home = () => {
  return (
    <div >
        <Banner></Banner>
        <WorkSection></WorkSection>
        <Services></Services>
        <Brands></Brands>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  )
}

export default Home