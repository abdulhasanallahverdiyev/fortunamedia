import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from '../../src/media/wp-icon.png';
import '../Css/WriteToUs.scss';
const WriteToUs = () => {
  return (
    <section className="write-to-us">
      <div className="container">
        <div className="main-box">
          <div className="vibration_img">
            <Link to="https://api.whatsapp.com/send?phone=+994552624037">
              <img src={whatsapp} alt="whatsapp icon" />
            </Link>
          </div>
          <div className="chat">
            <h2>Sualınız var? </h2>
            <h3>Bir kliklə yazın, yardımçı olaq. </h3>
            <Link to="https://api.whatsapp.com/send?phone=+994552624037" target="_blank">
              WhatsApp-a yazın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteToUs;
