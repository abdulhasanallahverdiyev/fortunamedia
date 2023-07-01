import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import HeroSection from '../Components/HeroSection';
import Collaborator from '../Components/Collaborator';
import HomeNewWorks from '../Components/HomeNewWorks';
import Subscribe from '../Components/Subscribe';
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (

    <div className='hero' style={{paddingTop:"75px"}}>
      <Helmet>
        <title>Əsas səhifə</title>
      </Helmet>
      <HeroSection />
      <Collaborator />
      <HomeNewWorks />
      <Subscribe />
    </div>
  )
}

export default Home
