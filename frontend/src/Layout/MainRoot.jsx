import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { mainContext } from '../Context/Context';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainRoot = () => {
  const { loading } = useContext(mainContext);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default MainRoot;
