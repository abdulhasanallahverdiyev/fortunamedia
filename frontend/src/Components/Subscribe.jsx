import React, { useContext } from 'react'
import "../Css/Subscribe.scss"
import { mainContext } from '../Context/Context'
const Subscribe = () => {
    const {subState,handleSubChange,postSubData}=useContext(mainContext)
    return (
        <div className='subscribe_area'>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12">
                        <div className="subscribe-text">
                            <h3>Subscribe To Our Newsletter</h3>
                            <h6>Subcribe Us And Tell Us About Your Story</h6>
                        </div>
                    </div>
                    <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12">
                        <div className="subscribe-form">
                            <form action="#" onSubmit={postSubData}>
                                <input type="email" name='email' value={subState.email} onChange={handleSubChange} placeholder='Your Email'  required/>
                                    <button type='submit'>subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
