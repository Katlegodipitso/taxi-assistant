import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Example } from './Example.js'
import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import FindTaxiRank from './FindTaxiRank'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import LogoutButton from './LogoutButton'

function Header({ menuPage }) {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <Link className='header__logo' to='/'>
          <img
            src="https://cdn.dribbble.com/users/514552/screenshots/4255081/taxidup.gif"
            alt=''
          />
        </Link>
        <Link to='/' className='header__link'>
          Home
        </Link>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <Link className='header__link' to='/report'>
          Report
        </Link>
      </div>
      <div className='header__right'>
        <Example />
        <FindTaxiRank />
        {!user ? (
          <>
            <Link to='/account/signin'>
              <SignInButton />
            </Link>
            <Link to='/account/create'>
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className='header__logout'>
            {menuPage ? <LogoutButton /> : <Link to='/account/signin'>logout</Link>}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header