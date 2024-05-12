import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { restaurant, width } = props;
    return (
        <Link  className={width + ' cursor-pointer h-80 bg-white block mb-2 border border-gray-300 hover:border-gray-500 '} to={'/restaurants/' + restaurant.id}>
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

export const withPromotedLabel = (ResCard) =>{
    return (props) => {
       return (<div className='relative w-[30%] before:inline-block before:w-[2px] before:left-[-2px] before:h-[34px] before:absolute before:content-[""] before:top-[2px] before:bg-black before:shadow-[-2px_0px_0px_0px_black] before:rounded-lg'>
            <label className='absolute h-[32px] top-[2px] inline-block p-[2%] bg-black text-white'>
                Promoted
            </label>
            <ResCard {...props}/>
        </div>)
    }
}

export default RestaurantCard;