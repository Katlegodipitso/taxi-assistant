import React from 'react'
import './FindTaxiRank.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function FindAStore() {
  return (
    <Link to="https://maps.google.com/" className='findAStore'>
      <LocationOnIcon />
      <h5>Find Taxi Rank</h5>
    </Link>
  )
}

export default FindAStore