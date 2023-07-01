import React, { useContext, useState } from 'react';
import '../Css/Navbar.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { mainContext } from '../Context/Context';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './Logo';
const Navbar = () => {
  const { open, handleOpen } = useContext(mainContext);
  const [navbar, setNavbar] = useState(false);
  let activeStyle = {
    color: '#ED7F1E',
  };

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="row">
          <div
            className="sidebar_nav"
            style={{ transform: open ? 'translate(0%)' : 'translate(-100%)' }}>
            <div className="sidebar_head">
              <h5>Menu</h5>
              <button onClick={handleOpen}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="sidebar_links">
              <ul>
                <li>
                  <NavLink to="/">Əsas səhifə</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Haqqımızda</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Xidmətlər</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            </div>
            <div className="mobile_social">
              <ul>
                <li>
                  <Link to="/">
                    <FaFacebookF />{' '}
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {' '}
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo-side">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="link-side">
            <ul className="nav_list">
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/">
                  Əsas səhifə
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/about">
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/services">
                  Xidmətlər
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="social_and_hamburger">
            <ul className="social_media">
              <li>
                <Link to="/">
                  <FaFacebookF />{' '}
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/">
                  {' '}
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
            <div className="hamburger">
              <button onClick={handleOpen}>
                {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
