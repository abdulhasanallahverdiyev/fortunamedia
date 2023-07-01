import React, { useContext } from 'react';
import '../Css/Footer.scss';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  AiOutlineInstagram,
  AiOutlineSend,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  BsFacebook,
  BsTelegram,
  BsFillTelephonePlusFill,
} from 'react-icons/bs';
import logoFooter from '../../src/media/FortunaMedia.png';
import { mainContext } from '../Context/Context';
const Footer = () => {
  const { subState, postSubData, handleSubChange } = useContext(mainContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_head">
          <div className="row">
            <div className="col-4 col-lg-4 col-md-12 col-s-12">
              <div className="footer_logo_content">
                <img src={logoFooter} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quaerat sed facilis repellendus! Dolorem maiores, ipsam
                  nostrum pariatur cumque quidem iure est earum, eum, magnam
                  sapiente unde voluptate vero quam.
                </p>
              </div>
            </div>
            <div className="col-2 col-lg-2 col-md-12 col-s-12">
              <div className="footer_links_content">
                <h3>Bizim Şirkət</h3>
                <ul>
                  <li>
                    <Link to="/">Əsas səhifə</Link>
                  </li>
                  <li>
                    <Link to="/">Haqqımızda</Link>
                  </li>
                  <li>
                    <Link to="/">Xidmətlər</Link>
                  </li>
                  <li>
                    <Link to="/">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Əlaqə</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3 col-lg-3 col-md-12 col-s-12 col-xs-12 ">
              <div className="footer_contact_content">
                <h3>Əlaqə</h3>
                <ul>
                  <li>
                    <GoLocation />
                    <span>Baku, Azerbaijan</span>
                  </li>
                  <li>
                    <GoMail />
                    <Link to="mailto:adkasd@gmail.com">adkasd@gmail.com</Link>
                  </li>
                  <li>
                    <BsTelephoneOutboundFill />
                    <Link to="tel:+994-12 565 39 05">+994-12 565 39 05</Link>
                  </li>
                  <li>
                    <BsFillTelephonePlusFill />
                    <Link to="tel:+994-70 565 39 05">+994-70 565 39 05</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 col-lg-3 col-md-12 col-s-12 col-xs-12">
              <div className="subscribe_and_social">
                <h3>Sosial</h3>
                <div className="subscribe_social_content">
                  <ul>
                    <li>
                      <Link to="/">
                        {' '}
                        <AiOutlineInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <BsFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        {' '}
                        <AiOutlineWhatsApp />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <BsTelegram />
                      </Link>
                    </li>
                  </ul>
                  <div className="subscribe_btn">
                    <form onSubmit={postSubData}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={subState.email}
                        onChange={handleSubChange}
                        placeholder="Mesaj gonder"
                      />
                      <button>
                        <AiOutlineSend />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_end">
          <div className="row">
            <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
              <article className="footer_end_left">
                <p>
                  ©<script>document.write(new Date().getFullYear())</script>2023
                  Bütün hüquqlar qorunur.
                </p>
              </article>
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-s-6 col-xs-12">
              <article className="footer_end_right">
                <p>
                  Dizayn
                  <Link target="_blank" to="https://www.neymantech.com/">
                    NeymanTech
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
