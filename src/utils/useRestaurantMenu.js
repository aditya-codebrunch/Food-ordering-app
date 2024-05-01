import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    useEffect(() => {
        fetchRestaurantData();
    }, []);

    async function fetchRestaurantData() {
        let response = await fetch(BASE_URL + '/restaurants/' + resId);
        let data = await response.json();
        setRestaurantData(data);
    }
    return restaurantData;
}

export default useRestaurantMenu;