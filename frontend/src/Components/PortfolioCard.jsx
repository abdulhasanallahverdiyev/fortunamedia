import React, { useContext, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import "../Css/PortfolioCard.scss"
import { mainContext } from '../Context/Context'
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from "aos"
const PortfolioCard = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const { latest, select } = useContext(mainContext)
    return (
        <div className='portfolio_section' >
            <div className="container">
                <div className="portfolio_title">
                    <h3>Portfolio</h3>
                </div>
                <div  data-aos="fade-up" className="row" >
                    {latest && latest
                        .filter((project) => {
                            return select === "all"
                                ? project
                                : project.service.name.includes(select)
                        })
                        .map((projects, id) => (
                            <AnimatePresence key={id}>
                                <motion.div
                                    layout
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="col-4 col-lg-4 col-md-6 col-s-6 col-xs-12" >
                                    <div className="single_work">
                                        <Link to="" className='thumbnail'>
                                            <img src={projects.proje_photo} alt="last work" />
                                        </Link>
                                        <div className="content-wrapper">
                                            <h5 className='title'>
                                                {projects?.project_name}
                                            </h5>
                                            <Link target='_blank' to={projects?.proje_link}>View Work <AiOutlineArrowRight /></Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        ))}

                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
