import React from 'react'
import logo from './assets/Image/logo.png'

const Nav = () => {
  return (
    <div>
      <header>
        <a href = "#" class = "logo"> <img src = {logo}/></a>

        <ul class = "navmenu">
            <li><a href = "/">Home</a></li>
            <li><a href = "/">Shop</a></li>
            <li><a href = "/">Products </a></li>
            <li><a href = "/">Pages</a></li>
            <li><a href = "/">Docs</a></li>
        </ul>

        <div class = "nav-icon">
            <a href = "/" ><i className='bx bx-search'></i></a>
            <a href = "/" ><i className='bx bxs-user'></i></a>
            <a href = "/" ><i className='bx bxs-cart'></i></a>

            <div className= "bx bx-menu" id = "menu-icon" ></div>
        </div>
    </header>
    </div>
  )
}

export default Nav