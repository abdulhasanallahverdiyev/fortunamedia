import React from 'react'
import "../Css/AboutHero.scss";
import aboutHero from "../../src/media/about_hero_image.png"
const AboutHero = () => {
    return (
        <div className='about_hero'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12">
                        <article className='about_hero_content'>
                            <h2>Biz kimik?</h2>
                            <p>Sirket haqqinda qisa melumat olacag, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </article>
                    </div>
                    <div className="col-6 col-lg-6 col-md-9 col-s-12 col-xs-12">
                        <div className="about_hero_image">
                            <img src={aboutHero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero
