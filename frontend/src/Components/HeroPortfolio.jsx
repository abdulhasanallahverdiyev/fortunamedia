import React, { useContext, useState } from 'react';
import '../Css/HeroPortfolio.scss';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { mainContext } from '../Context/Context';
const HeroPortfolio = () => {
  const { handleSelect, service } = useContext(mainContext);
  const [isopen, setIsOpen] = useState(true);
  return (
    <div className="portfolio_hero">
      <div className="container">
        <div className="row">
          <div className="col-8 col-lg-8 col-md-12 col-s-12 col-xs-12">
            <div className="portfolio_content">
              <h2>Fortuna - media</h2>
              <p>Öz brendini bizimlə tanıt!</p>
              <div className="select_filter" onClick={() => setIsOpen(!isopen)}>
                <div className="icon">
                  {' '}
                  {isopen ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <select onChange={handleSelect}>
                  <option disabled>Seçim et</option>
                  <option value="all">Hamısı</option>
                  {service?.map((e,index) => (
                    <option key={index} value={e.name}>{e.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-4 col-md-6 col-s-10 col-xs-12">
            <div className="hero_portfolio_image">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;
