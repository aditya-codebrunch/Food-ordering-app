import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantCard from './RestaurantCard.js';
import { useState, useEffect } from 'react';
import { FETCH_MOCK_DATA_URL } from '../utils/constants.js'

let restaurants = [];
const Content = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    useEffect(()=>{
        fetch(FETCH_MOCK_DATA_URL).then((response)=>{
            return response.json();
        }).then((data)=>{
            restaurants = data;
            setRestaurantsList(restaurants);
        })
    },[]);
    return (
        <div id="content">
            <div className='content-container'>
                {Header()}
                <Search setResList={setRestaurantsList} restaurants={restaurants}/>
                <div className='filter-container'>
                    <button onClick={() => {
                        let filteredList = restaurants.filter((restaurant) => {
                            if (restaurant.rating > 4.8) {
                                return true;
                            }else{
                                return false;
                            }
                        });
                        setRestaurantsList(filteredList);
                    }}>See Top Restaurants</button>
                    <button onClick={() => {
                        setRestaurantsList(restaurants);
                    }}>See All Restaurants</button>
                </div>
                {restaurantsList.map((restaurant) => {
                    return (<RestaurantCard key={restaurant.id} restaurant={restaurant} />);
                })}
                {Footer()}
            </div>
        </div>
    )
}

export default Content;