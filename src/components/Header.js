import React, { useState } from 'react'
import './Header.css'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {
  const [loginLogOut, setLoginLogOut] = useState(false)
  const loginLogOutHandler = () => {
    setLoginLogOut(!loginLogOut)
  }
  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img src={LOGO_URL} className='logo' />
        </Link>
      </div>
      <ul className='nav-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link> Cart </Link>
        </li>
        <li>
          <Link to='/login'>
            <button onClick={loginLogOutHandler}>
              {loginLogOut ? 'Login' : 'Logout'}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
