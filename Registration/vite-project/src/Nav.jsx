import React from 'react'
import logo from './assets/Image/logo.png';
import logoutimg from './assets/Image/logoutimg.png';
import {Link , useNavigate} from "react-router-dom"


const Nav = () => {
  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear();
      navigate('/')
}
  return (
    <div>
      <header>
        <Link to = "/Home" className = "logo"> <img src = {logo}/></Link>
        

        <ul class = "navmenu">
            <li><Link to = "/Home">Home</Link></li>
            <li><Link to = "/Products">Products </Link></li>
            <li><Link to = "/Reviews">Reviews</Link></li>
            <li><Link to = "/Updates">Updates</Link></li>
        </ul>
        <li><Link to = "/" onClick={logout} ><img src = {logoutimg} className='logoutimg'/></Link></li>

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