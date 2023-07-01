import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroServices from '../Components/HeroServices';
import LatestWork from '../Components/LatestWork';

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div style={{paddingTop:"75px"}}>
      <Helmet>
        <title>Servislər</title>
      </Helmet>
      <HeroServices />
      <LatestWork />
    </div>
  );
};

export default Services;
