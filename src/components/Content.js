import Search from './Search.js';
import Header from './Header.js';
import Footer from './Footer.js';
import RestaurantCard from './RestaurantCard.js';
import {restaurants} from '../utils/constants.js';

const Content = () => {
    return (
        <div id="content">  
            <div className='content-container'>
                {Header()} 
                {Search()}  
                {restaurants.map((restaurant)=>{
                    return (<RestaurantCard key={restaurant.id} restaurant={restaurant} />);
                })}
                {Footer()}
            </div>
        </div>
    )
}

export default Content;