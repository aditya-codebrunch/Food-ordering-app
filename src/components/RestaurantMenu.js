import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import { useParams } from "react-router-dom";
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurantData = useRestaurantMenu(resId);
    return !restaurantData ? (ShimmerMenu()) : (
        <div className="w-full p-[10%]">
            <h1 className='font-bold text-left'>{restaurantData.name}</h1>
            <h4 className='font-thin text-left text-orange-500 mb-2'>{restaurantData.cusine}</h4>
            <ul className='text-center'>
                {restaurantData.items.map(item => <li className='border border-slate-200 h-[50px] mb-2' key={item.id}><a className='cursor-pointer hover:bg-gray-200 relative top-1/3'><span >{item.itemName}</span><i>{' Rs ' + item.cost}</i></a></li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;