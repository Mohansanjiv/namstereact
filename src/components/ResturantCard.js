import React from 'react';
import './ResturantCard.css';

const ResturantCard = () => {
  return (
    <div className='card-container'>
       <div className='image-box'>
       <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ky8rkuqvci8jcro2yeyp' alt="Biryani vs Pulav"/>
       </div>
       <div className='card-content'>
          <div className='title'>Title</div>
          <div className='delivery-time'><span>Star Ratings </span><span>Deleivery time</span></div>
          <div className='cusine'>cusines</div>
       </div>
    </div>
  )
}

export default ResturantCard
