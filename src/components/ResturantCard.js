import React from 'react';
import './ResturantCard.css';

const ResturantCard = (props) => {
  const data =props.data.info;
  return (
    <div className='card-container'>
      <div className='image-box'>
        <img
          src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/' +
            data.cloudinaryImageId
          }
        />
      </div>
      <div className='card-content'>
        <div className='title'>{data.name}</div>
        <div className='delivery-time'>
          <span>Ratings-{data.avgRating}</span>
          <br />
          <span>{data.costForTwo}</span>
          <br/>
          <span>{data.deliveryTime} mintues</span>
        </div>
        <div className='cusine'>
          {data.cuisines}
        </div>
      </div>
    </div>
  )
}

export default ResturantCard
