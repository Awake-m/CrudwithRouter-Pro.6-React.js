import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/Home.css'

function Header() {
  return (
    <header>
      <div>
        <h1>Wrish</h1>
      </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Shop" activeClassName="active">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/Product" activeClassName="active">Product</NavLink>
              </li>
              <li>
                <NavLink to="/Blog" activeClassName="active">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/Page" activeClassName="active">Page</NavLink>
              </li>
              <li>
                <NavLink to="/Login" activeClassName="active">Login</NavLink>
              </li>
              
            </ul>
          </nav>
        </header>
  )
}

export default Header
