import React from 'react'
import './ResturantCard.css'
import { CDN_URL } from '../utils/constant'

const ResturantCard = props => {
  const data = props.data.info;

  return (
    <div className='card-container'>
      <div className='image-box'>
        <img src={CDN_URL + data.cloudinaryImageId} />
      </div>
      <div className='card-content'>
        <div className='title'>{data.name}</div>
        <div className='cusine'>{data.cuisines.join(',')}</div>
        <div className='delivery-time'>
          <span>{data.costForTwo}</span>
          <br />
          <span>Ratings-{data.avgRating}</span>
          <br />

          <span>{data.sla.deliveryTime} mintues</span>
        </div>
        
      </div>
    </div>
  )
}

export default ResturantCard
