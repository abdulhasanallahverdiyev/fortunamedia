import React from 'react'
import "../Css/NotFound.scss"
import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div className="notfound">
            <Link to='/'>
                <div className='not_head'>
                    <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
                    <h2>Error: 404 page not found</h2>
                    <p>Sorry, the page you're looking for cannot be accessed</p>
                </div>
            </Link>
        </div>
    )
}

export default NotFound
