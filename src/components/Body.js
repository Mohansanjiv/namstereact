import React from 'react'
import ResturantCard from './ResturantCard'

const Body = () => {
  return (
    <>
    <div>Search</div>
    <div style={{display:"flex" , flexWrap:"wrap"}}>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
       <ResturantCard/>
    </div>
    </>
  )
}

export default Body
