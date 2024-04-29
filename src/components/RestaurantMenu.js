import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
    const resId = useParams()['resId'];
    const [restaurantData, setRestaurantData] = useState(null);
    useEffect(() => {
        fetchRestaurantData();
    }, []);

    async function fetchRestaurantData() {
        let response = await fetch(BASE_URL + '/restaurants/' + resId);
        let data = await response.json();
        setRestaurantData(data);
    }

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