import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <Link to = "/" className="header__home">Home</Link>
        </div>
        <div className="header__right">
            <Link to = "/projects" className="header__projects">Projects</Link>
            <Link to = "/login" className="header__login">Login</Link>

        </div>
        {/* <div>Login, Home, Projects</div> */}
    </div>
  )
}

export default Header