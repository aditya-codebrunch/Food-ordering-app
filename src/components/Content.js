import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer.js';
import Search from './Search.js';
import useRestaurantsList from '../utils/useRestaurantsList.js';
import useOnline from '../utils/useOnline.js';
import { Link } from 'react-router-dom';

let restaurants = [];
const Content = () => {
    const [restaurantsList,setRestaurantsList] = useRestaurantsList();
    const online = useOnline();
    return !online?(<h1>You are offline, fix your internet Connection</h1>):(
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