import logo from '../../public/images/Food-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [logInOrOut, setLogInOrOut] = useState('login');
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
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