import React from 'react'
import "./navbarstyle.css"
import searchw from '../../assets/nav-assets/search-w.png'
import searchb from '../../assets/nav-assets/search-b.png'
import whitelogo from '../../assets/nav-assets/logo-white.png'
import blacklogo from '../../assets/nav-assets/logo-black.png'
import bright from '../../assets/nav-assets/day.png'
import dark from '../../assets/nav-assets/night.png'
import logo2 from '../../assets/nav-assets/Logo_SiteW.jpg'


function Navbar({ themeChange , setThemeChange}) {

    function toggle_mode(){
        if(themeChange == 'light'){
            setThemeChange('dark')
        }
        else{
            setThemeChange('light')
        }
    }


  return (
        <nav className='navbar'>
            <img src={themeChange == 'light' ? blacklogo : whitelogo} alt="logo" className='logo' />

            <ul className='nav-items'>
                <li>Home</li>
                <li>Activities</li>
                <li>Products</li>
                <li>Contact us</li>
            </ul>

            <div className='search-bar'>
                <input type="text" placeholder='Search' />
                <img src={themeChange == 'light' ? searchw : searchb} alt="" />
            </div>

            <img src={themeChange == 'light' ? dark : bright} onClick={toggle_mode} alt="" className='toggle-icon' />
        </nav>
  )
}

export default Navbar