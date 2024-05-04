import searchIcon from '../../public/images/magnifying-glass.png';
import { useState } from 'react';
const Search = (props) => {
    const { setResList, restaurants } = props;
    const [filterStr, setFilterStr] = useState('');
    return (
        <div className='w-full px-[20%] mb-2'>
            <div className='flex flex-nowrap flex-row w-full py-1 justify-center border border-solid border-gray-400'>
                <input type='text' className='w-[95%] h-[30px] focus-visible:outline-0' value={filterStr} onChange={(event) => {
                    setFilterStr(event.target.value);
                }} placeholder='Search For Restaurants' />
                <a className='w-[3%] h-[30px] cursor-pointer' onClick={() => {
                    let filteredList;
                    if (filterStr.trim() === '') {
                        setResList(restaurants);
                    } else {
                        filteredList = restaurants.filter((res) => {
                            if ((res.name.toLowerCase()).search(filterStr.toLowerCase()) !== -1) {
                                return true;
                            } else {
                                return false;
                            }
                        });
                        setResList(filteredList);
                    }
                }} ><img src={searchIcon} className='w-[100%] h-[100%] ' /></a>
            </div>
        </div>
    );
}
export default Search;