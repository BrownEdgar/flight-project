import React from 'react'
import { NavLink } from 'react-router-dom'
import ROUTES from '../../routes/Router'
import './Navbar.scss'

export default function Navbar() {

  return (
    <header>
      <nav className="flex">
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} >Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>Abouts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CITIES} >Cities</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
