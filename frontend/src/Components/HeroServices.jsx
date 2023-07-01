import React, { useContext } from 'react'
import "../Css/HeroServices.scss"
import { Link } from "react-router-dom"
import { mainContext } from '../Context/Context'
const HeroServices = () => {
    const { service } = useContext(mainContext)
    return (
        <div className='hero_services'>
            <div className="hero_services_title">
                    <h2>Xidmətlərimiz</h2>
                </div>
            <div className="container">
                
                <div className="row">
                    {service && service.map((item, index) => (
                        <div key={index}  className="col-3 col-lg-3 col-md-6 col-s-10 col-xs-12">
                            <div className="single_service">
                                <div className="service_icon">
                                    <img src={item.logo} alt={item.name} />
                                </div>
                                <div className="service_content">
                                    <Link to={`${item.id}`}>{item.name} </Link>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default HeroServices
