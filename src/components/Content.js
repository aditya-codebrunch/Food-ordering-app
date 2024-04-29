import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer.js';
import Search from './Search.js';
import { useState, useEffect } from 'react';
import { FETCH_MOCK_DATA_URL } from '../utils/constants.js';
import { Link } from 'react-router-dom';

let restaurants = [];
const Content = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    useEffect(() => {
        fetch(FETCH_MOCK_DATA_URL).then((response) => {
            return response.json();
        }, (error) => {
            console.log(error);
        }).then((data) => {
            restaurants = data;
            setRestaurantsList(restaurants);
        }, (error) => {
            console.log(error);
        });
    }, []);
    return (
        <>
            <Search setResList={setRestaurantsList} restaurants={restaurants} />
            <div className='filter-container'>
                <button onClick={() => {
                    let filteredList = restaurants.filter((restaurant) => {
                        if (restaurant.rating > 4.8) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    setRestaurantsList(filteredList);
                }}>See Top Restaurants</button>
                <button onClick={() => {
                    setRestaurantsList(restaurants);
                }}>See All Restaurants</button>
            </div>
            {
                // conditional rendering
                restaurantsList.length ?
                    (restaurantsList.map((restaurant) => {
                        return (<Link className='res-card' key={restaurant.id} to={'/restaurants/'+restaurant.id}><RestaurantCard restaurant={restaurant} /></Link>);
                    })) : (<Shimmer />)
            }
        </>
    )
}

export default Content;