import logo from '../../public/images/Food-logo.png';
import { useState } from 'react';


const Header = () => {
    const [logInOrOut, setLogInOrOut] = useState('login');
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
                    <li className='sign-in'><a onClick={()=>{
                        if(logInOrOut === 'login'){
                            setLogInOrOut('logout');
                        }else{
                            setLogInOrOut('login');
                        }
                    }}>{logInOrOut}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;