import React from 'react';
import ReactDOM from 'react-dom/client';
import {img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12} from './images.js';
import searchIcon from './images/magnifying-glass.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(img1);
const restaurants = [
    {
        id:12,
        name:'Meghana',
        cusine:'Continental, Indian',
        rating:'4.8',
        eta:'41',
        resImage:img1
    },
    {
        id:24,
        name:'Masoor',
        cusine:'Afghani, Turkish',
        rating:'4.6',
        eta:'39',
        resImage:img2
    },
    {
        id:36,
        name:'kajoor',
        cusine:'Biryanis',
        rating:'4.3',
        eta:'46',
        resImage:img3
    },
    {
        id:48,
        name:'Nalanda',
        cusine:'South Indian',
        rating:'4.9',
        eta:'30',
        resImage:img4
    },
    {
        id:60,
        name:'Eghana',
        cusine:'Continental, Indian',
        rating:'4.8',
        eta:'41',
        resImage:img5
    },
    {
        id:72,
        name:'Moor',
        cusine:'Afghani, Turkish',
        rating:'4.6',
        eta:'39',
        resImage:img6
    },
    {
        id:90,
        name:'joor',
        cusine:'Biryanis',
        rating:'4.3',
        eta:'46',
        resImage:img7
    },
    {
        id:102,
        name:'Calanda',
        cusine:'South Indian',
        rating:'4.9',
        eta:'30',
        resImage:img8
    },
    {
        id:120,
        name:'Mehana',
        cusine:'Continental, Indian',
        rating:'4.8',
        eta:'41',
        resImage:img9
    },
    {
        id:132,
        name:'soor',
        cusine:'Afghani, Turkish',
        rating:'4.6',
        eta:'39',
        resImage:img10
    },
    {
        id:144,
        name:'kaoor',
        cusine:'Biryanis',
        rating:'4.3',
        eta:'46',
        resImage:img11
    },
    {
        id:156,
        name:'Nanda',
        cusine:'South Indian',
        rating:'4.9',
        eta:'30',
        resImage:img12
    }
];

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={require('./images/Food-logo.png')}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </div>
        </div>
    )
}
const Footer = () => {
    return (
        <div className='footer'>
            <h4>@Copyright - Hunger Games - All rights reserved</h4>
        </div>
    )
}
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
const search = <a className='searchBtn'><img src = {searchIcon} width = {'80%'} height={'30'}/></a>;
const searchInput = (<input type='text' placeholder='Search For Restaurants' className='searchInp'/>);
const Search = () => 
(<div className='search-container'>
{searchInput}{search}
</div>);

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
const AppLayout = () => {
    return (
       <div className='app'>
            {Content()}
       </div>
    )
};

root.render(<AppLayout/>);