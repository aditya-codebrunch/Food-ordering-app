import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import ShimmerMenu from './ShimmerMenu';
import FoodCategory from './FoodCategory.js';

const RestaurantMenu = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const { resId } = useParams();
    const restaurantData = useRestaurantMenu(resId);
    return !restaurantData ? (ShimmerMenu()) : (
        <div className="w-full p-[10%]">
            <h1 className='font-bold text-lg text-left'>{restaurantData.name}</h1>
            <h4 className='font-thin text-left text-orange-500 mb-2'>{restaurantData.cusine}</h4>
            <div className='text-center'>
                {restaurantData.items.map((item, index) => <FoodCategory
                    key={item.category} category={item.category}
                    setExpandedIndex={setExpandedIndex}
                    showItems={expandedIndex === index ? true : false}
                    itemList={item.itemList} index={index} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu;