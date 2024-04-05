const RestaurantCard = (props) => {
    const {restaurant} = props;
    return (
        <div className='res-card'>
            <figure>
                <img className='resImg' src={restaurant.resImage}/>
                <figcaption>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.cusine}</p>
                    <p>{restaurant.rating + ' stars'}</p>
                    <p>{'ETA ' + restaurant.eta + ' mins'}</p>
                </figcaption>
            </figure> 
        </div>
    );
};

export default RestaurantCard;