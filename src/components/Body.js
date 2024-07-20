import React, { useEffect, useState } from 'react';
import ResturantCard from './ResturantCard';
import './Body.css';

const Body = () => {
  const [listCard, setListCard] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4520164&lng=78.3648453&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json();
      const resData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListCard(resData);
      console.log(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = () => {
    const rescard = listCard.filter((res) => res.info.avgRating > 4);
    setListCard(rescard);
  };


  return (
    <div>
      <button onClick={handleFilter}>High Rated Restaurant</button>
      <div className='bodyDisplayContent'>
        { 
          listCard.map((resCards) => {
            return (
              <ResturantCard key={resCards.info.id} data={resCards} />
            )
          })
        } 
      </div>
    </div>
  );
};

export default Body;
