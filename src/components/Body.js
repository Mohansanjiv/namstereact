import React, { useEffect, useState } from 'react';
import ResturantCard from './ResturantCard';
import './Body.css';
import ShimmerUi from './ShimmerUi'

const Body = () => {
  const [listCard, setListCard] = useState([])
  const [filteredResturant, setFilteredResturant] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4520164&lng=78.3648453&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const jsonData = await data.json()
      const resData =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      setListCard(resData)
      setFilteredResturant(resData)
      console.log(resData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleFilter = () => {
    const rescard = listCard.filter(res => res.info.avgRating > 4)
    setFilteredResturant(rescard)
  }

  return (
    <div>
      {listCard.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <input
                type='search'
                value={search}
                onChange={e => {
                  setSearch(e.target.value)
                  // console.log(search)
                }}
              />
              <button
                onClick={() => {
                  let filterdRestura = listCard.filter(data =>
                    data.info.name.toLowerCase().includes(search.toLowerCase())
                  )
                  setFilteredResturant(filterdRestura)
                }}
              >
                Search
              </button>
            </div>
            <button onClick={handleFilter}>High Rated Restaurant</button>
          </div>

          <div className='bodyDisplayContent'>
            {filteredResturant.map(resCards => {
              return <ResturantCard key={resCards.info.id} data={resCards} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
