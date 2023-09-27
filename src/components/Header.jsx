import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/images/'
const Header = () => {
    return (
        <header className="header py-8 sticky w-full top-0 right-0 left-0">
            <div className="container">
                {/* logo  */}
                <Link to='/'>
                    <img src={Logo} alt="profile picture maker logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header