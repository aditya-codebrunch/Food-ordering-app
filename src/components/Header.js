import logo from '../../public/images/Food-logo.png';
import { useContext } from 'react';
import useOnline from '../utils/useOnline';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';


const Header = () => {
    const online = useOnline();
    const {loggedInUser, loggedInStatus, setSignedInStatus} = useContext(UserContext);
    console.log(setSignedInStatus);

    return (
                <ul className='flex font-bold w-full mb-2 px-[10%] py-[0.2%] flex-row flex-nowrap justify-between bg-slate-100 shadow-sm'>
                    <li className='w-1/6'><img src={logo} className='w-[40%]'></img></li>
                    <li>{online?(()=>(<span className='relative top-[30%]'>Online Status&#9989;</span>))():(()=>(<span>Online Status&#128308;</span>))()}</li>
                    <li><Link className='relative top-[30%]' to='/'>Home</Link></li>
                    <li><Link className='relative top-[30%]' to='/about'>About</Link></li>
                    <li><Link className='relative top-[30%]' to='/contact'>Contact Us</Link></li>
                    <li><Link className='relative top-[30%]' to='/grocery'>Grocery</Link></li>
                    <li><a className='relative top-[30%] cursor-pointer'onClick={()=>{
                        setSignedInStatus(!loggedInStatus)
                    }}>{loggedInStatus?'Sign Out':'Sign In'}</a></li>
                    {(loggedInStatus) && <li><span className='relative top-[30%]'>{loggedInUser}</span></li>}
                </ul>
    )
}

export default Header;