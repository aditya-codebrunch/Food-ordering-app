import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantCard from './RestaurantCard.js';
import { restaurants } from '../utils/constants.js';
import { useState } from 'react';

const Content = () => {
    const [restaurantsList, setRestaurantsList] = useState(restaurants);
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