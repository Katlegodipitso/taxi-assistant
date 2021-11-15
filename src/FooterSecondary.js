import React from 'react'
import { Link } from 'react-router-dom'
import FindTaxiRank from './FindTaxiRank'
import './FooterSecondary.css'

function FooterSecondary({ alignItems, paddingLeft, flexDirection }) {
  return (
    <div
      className='footerSecondary'
      style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
    >
      <div
        className='footerSecondary__container'
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className='footerSecondary__info'>
          <div className='footerSecondary__left'>
            <FindTaxiRank />
          </div>
          <div className='footerSecondary__right' style={{ flexDirection }}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/report">Report</Link>
          </div>
        </div>
        <span className='footerSecondary__copyright'>© 2021 Taxi-Assistant</span>
      </div>
    </div>
  )
}

export default FooterSecondary