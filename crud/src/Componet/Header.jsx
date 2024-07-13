import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/Home.css'
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BiLogoShopify } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Header() {
  return (
    <>
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
              <li>
              <BiSearchAlt />
              </li>
              <li>
              <AiOutlineHeart />
              </li>
              <li>
              <BiLogoShopify />
              </li>
            </ul>
          </nav>
        </header>
     

     {/* Section 2 */}
        <header class="header1">
    <div class="header-content">
      <h1>EXTRA 20% OFF</h1>
      <h2>NEW ARRIVALS</h2>
      <button class="shop-button">Shop Collection<FaArrowAltCircleRight /></button>
    </div>
  </header>
  <section class="product-section">
    <div class="product-card">
      <img src="./public/img/banner-1.png" alt="Dress Watches" class="product-image" height="100px" />
      <h3>Dress Watches</h3>
      <button class="shop-button">Shop Now</button>
    </div>
    <div class="product-card">
      <img src="./public/img/banner-2.png" alt="Sports Watches" class="product-image"/>
      <h3>Sports Watches</h3>
      <button class="shop-button">Shop Now</button>
    </div>
    <div class="product-card">
      <img src="./public/img/banner-3.png" alt="Smart Watches" class="product-image"/>
      <h3>Smart Watches</h3>
      <button class="shop-button">Shop Now</button>
    </div>
  </section>

   {/* Section 2 */}


   {/* Section 3 */}
   <div className='section2'>
       <div className='name'>
        <h4>TOP RATING</h4>
        <h4>BEST SELLING </h4>
        <h4>FEATURED</h4>
       </div>

   </div>
   {/* Section 3 */}

     
        



  </>
  )
}

export default Header
