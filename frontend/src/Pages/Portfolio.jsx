import React, { useEffect } from 'react'
import {Helmet} from "react-helmet";
import HeroPortfolio from '../Components/HeroPortfolio';
import PortfolioCard from '../Components/PortfolioCard';
const Portfolio = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, [])
    return (
        <div style={{paddingTop:"75px"}}>
            <Helmet>
        <title>Portfolio</title>
      </Helmet>
            <HeroPortfolio />
            <PortfolioCard/>
        </div>
    )
}

export default Portfolio
