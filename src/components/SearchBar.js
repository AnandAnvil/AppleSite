
import React from 'react';
import './Search.css'
// import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({}) => {
  //const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};



  {/* <FontAwesomeIcon icon={faSearch} style={{color: 'white', width: '15px', height: '15px'}} onClick={searchBar} /> */}
  return (
    <React.Fragment>
    <div className="menu-search-container">
    <div className="menu-search-input">
        <form action="">
            <a href="#">
                <FontAwesomeIcon icon={faSearch} style={{ color: 'white', width: '15px', height: '15px' }} onClick={searchBar} />
            </a>
            <input className="menu-search-input" type="text" aria-label="Search apple.com" placeholder="Search apple.com" autoCorrect="off" autoCapitalize="off" autoComplete="off" spellCheck="false" />
        </form>
    </div>
    <a className="menu-search-close" href="#">
        <i className="fa fa-close" aria-hidden="true"></i>
    </a>

</div>
<div className="fade-screen"></div>
</React.Fragment>
  );
}

export default SearchBar