import React, { useEffect, useState } from 'react';
import '../Css/HeroSection.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import { BASE_URL } from '../httpRequest/httpRequest';
import axios from 'axios';
const HeroSection = () => {
  const [slider, setSlider] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}core-api/slider/`);
        setSlider(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slider &&
          slider
            .sort((a, b) => new Date(b?.created_at) - new Date(a?.created_at))
            .slice(0, 5)
            ?.map((slider, index) => (
              <SwiperSlide key={index}>
                <div className="hero_section">
                  <img src={slider?.slider_image} alt={slider?.slider_header} />
                  <div className="container">
                    <div className="hero_content">
                      <h1>{slider?.slider_header}</h1>
                      <p>{slider?.content}</p>
                      <Link
                        to="/portfolio"
                        target="_blank"
                        className="btn black"
                      >
                        Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
