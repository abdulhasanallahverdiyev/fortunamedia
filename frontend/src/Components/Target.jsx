import React, { useEffect } from 'react'
import "../Css/Target.scss"
import 'aos/dist/aos.css'
import Aos from "aos"
const Target = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div data-aos="fade-up"  className='target_section'>
            <div className="container">
                <div className="row">
                    <div className="col-7 col-lg-7 col-md-10 col-s-12 col-xs-12">
                        <div className="target_content">
                            <h2>Hədəfimiz</h2>
                            <p>Burda hedef nedi onla bagli yazi olacag .adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target
