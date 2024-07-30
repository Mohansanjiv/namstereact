import axios from 'axios';
import React, { useEffect, useState } from 'react'

 const ResturantMenu = () => {
const[menuItem,setMenuItem]=useState([])


const fetchData =async()=>{
     const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4520164&lng=78.3648453&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);  
    //  const data = await  response.json();
     console.log(response);
}
useEffect(()=>{
    fetchData();
},[])
  return (
    <div>
       <h1>Name Content</h1>
    </div>
  )
}
export default ResturantMenu;