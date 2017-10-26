import React from 'react'
import {  NavLink } from 'react-router-dom'
import LogoImg from './logo.png'
import './style.css'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header className="global-header">
        <NavLink to='/'><img alt="idealz logo" src={LogoImg} /></NavLink>
        <nav>
            <ul>
                <li><NavLink exact to='/' className="" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to='/macro' className="" activeClassName="active">Macro</NavLink></li>
                <li><NavLink to='/campaigns' className="" activeClassName="active">Campaigns Closed</NavLink></li>
                <li><NavLink to='/financial' className="" activeClassName="active">Financial</NavLink></li>
            </ul>
        </nav>
        <p className="greeting">WELCOME JOHN DOE  <a className="logout" href="/logout">logout</a></p>

    </header>
)

export default Header