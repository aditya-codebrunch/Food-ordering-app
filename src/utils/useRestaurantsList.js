import { useState, useEffect } from 'react';
import { FETCH_MOCK_DATA_URL } from '../utils/constants.js';

const useRestaurantsList = () => {
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
    return [restaurantsList,setRestaurantsList];
}

export default useRestaurantsList;