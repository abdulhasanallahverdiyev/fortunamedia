import React, { useContext, useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import "../Css/Collaborator.scss"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay } from "swiper";
import { mainContext } from '../Context/Context'
const Collaborator = () => {

    const { collaborator } = useContext(mainContext)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='collaborator_section' data-aos="fade-up">
            <div className="container">
                <div className="collaborator_title">
                    <h2>Əməkdaşlarımız</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}

                    breakpoints={{
                        // when window width is >= 320px
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        // when window width is >= 760px

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        // when window width is >= 992px

                        992: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        // when window width is >= 992px
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        }

                    }}
                >
                    {collaborator?.map((e, index) => (
                        <SwiperSlide key={index}>
                            <div className='partners_logo'>
                                <Link target='_blank' to={e.link}>
                                    <img src={e.logo} alt={e.name} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div >
    )
}

export default Collaborator
