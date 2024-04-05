import searchIcon from '../images/magnifying-glass.png';
import {useState} from 'react';
const Search = (props) => {
    const { setResList, restaurants } = props;
    const [filterStr, setFilterStr] = useState('');
    return (<div className='search-container'>
        <input type='text' value = {filterStr} onChange = {(event)=>{
            setFilterStr(event.target.value);
        }} placeholder='Search For Restaurants' className='searchInp' />
        <a onClick={()=>{
            let filteredList;
            if(filterStr.trim() === ''){
                setResList(restaurants);
            }else{
                filteredList = restaurants.filter((res)=>{
                    if((res.name.toLowerCase()).search(filterStr.toLowerCase()) !== -1){
                        return true;
                    }else{
                        return false;
                    }
                });
                setResList(filteredList);
            }
        }} className='searchBtn'><img src={searchIcon} width={'80%'} height={'30'} /></a>
    </div>);
}
export default Search;