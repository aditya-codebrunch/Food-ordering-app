import searchIcon from '../images/magnifying-glass.png';

const search = <a className='searchBtn'><img src = {searchIcon} width = {'80%'} height={'30'}/></a>;
const searchInput = (<input type='text' placeholder='Search For Restaurants' className='searchInp'/>);
const Search = () => 
(<div className='search-container'>
{searchInput}{search}
</div>);

export default Search;