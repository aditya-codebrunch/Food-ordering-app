import {logo} from '../utils/constants.js';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo}/>
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

export default Header;