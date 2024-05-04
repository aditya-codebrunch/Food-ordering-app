import RestaurantCard from './RestaurantCard.js';
import Shimmer from './Shimmer.js';
import Search from './Search.js';
import useRestaurantsList from '../utils/useRestaurantsList.js';
import useOnline from '../utils/useOnline.js';

const Content = () => {
    const [restaurantsList, setRestaurantsList, restaurants] = useRestaurantsList();
    const online = useOnline();
    return !online ? (<h1>You are offline, fix your internet Connection</h1>) : (
        <>
            <Search setResList={setRestaurantsList} restaurants={restaurants} />
            <div className='w-full px-[20%] mb-2'>
                <div className='w-full flex flex-row flex-nowrap justify-between'>
                    <button className='bg-gray-200 rounded-2xl p-[1%] cursor-pointer' onClick={() => {
                        let filteredList = restaurants.filter((restaurant) => {
                            if (restaurant.rating > 4.8) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                        setRestaurantsList(filteredList);
                    }}>See Top Restaurants</button>
                    <button className='bg-gray-200 rounded-2xl p-[1%] cursor-pointer' onClick={() => {
                        setRestaurantsList(restaurants);
                    }}>See All Restaurants</button>
                </div>
            </div>
            <div className='w-full  px-[20%] '>
                <div className='w-full h-[68vh] p-[3%] bg-slate-300 border border-solid border-gray-50'>
                    <div className='h-[60vh] px-[1%] overflow-y-auto flex flex-row flex-wrap justify-between' style={{scrollbarWidth:'none'}}>
                        {
                            // conditional rendering
                            restaurantsList.length ?
                                (restaurantsList.map((restaurant) => {
                                    return (<RestaurantCard restaurant={restaurant} key={restaurant.id} />);
                                })) : (<Shimmer />)
                        }
                    </div>
                </div>

            </div>

        </>
    )
}

export default Content;