import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import { useParams } from "react-router-dom";
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurantData = useRestaurantMenu(resId);
    return !restaurantData ? (ShimmerMenu()) : (
        <div className="menu mid-content">
            <h1>{restaurantData.name}</h1>
            <h4>{restaurantData.cusine}</h4>
            <ul>
                {restaurantData.items.map(item => <li key={item.id}><a><span>{item.itemName}</span><i>{' Rs ' + item.cost}</i></a></li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;