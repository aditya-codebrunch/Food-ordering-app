import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { restaurant } = props;
    return (
        <Link  className='cursor-pointer h-80 w-[30%] bg-white block mb-2 border border-gray-300 hover:border-gray-500 '  to={'/restaurants/' + restaurant.id}>
            <figure className="h-80 p-[1%] w-[100%]">
                <img className='object-cover h-40 w-[100%]' src={restaurant.resImage} />
                <figcaption className="w-[100%] text-center">
                    <h3 className='font-bold'>{restaurant.name}</h3>
                    <p className='font-thin text-sm'>{restaurant.cusine}</p>
                    <p className='font-thin text-sm'>{restaurant.rating + ' stars'}</p>
                    <p className='font-thin text-sm'>{'ETA ' + restaurant.eta + ' mins'}</p>
                </figcaption>
            </figure>
        </Link>
    );
};

export default RestaurantCard;