import React from 'react'
import { Link } from 'react-router-dom'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag, faSearch, faCamera, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import $ from 'jquery'






const searchBar = (e) => {
    console.log("here");
    var $searchView = $('.menu-search-container');
    var $fadeScreen = $('.fade-screen');
    var $menu =  $('.mac, .iPad, .iPhone, .Watch, .TV, .Music, .Support');
    $('.menu-search-container input').addClass("defaultSearch");
    $('.menu-search-close').addClass("addCloseIcon");
  
    $('.search-sub-menu').addClass("defaultSearchPanel");
        $searchView.toggleClass('active');
        setTimeout(function () {
            $searchView.children().find('input').focus();
        }, 1100);
        $fadeScreen.toggleClass('visible');
        $menu.removeClass('is-closed');
        $menu.toggleClass('hidden');
        e.preventDefault();
   
}
const closeIcon = (e)=>{
    var $menu =  $('.mac, .iPad, .iPhone, .Watch, .TV, .Music, .Support');
    
    $menu.toggleClass('is-closed');
    e.preventDefault();
}
let TopNav = () => {
    return (
        <header>
            <nav className="topNavigation">
                <Link to="/">
                    <FontAwesomeIcon icon={faApple} style={{ color: 'white', width: '20px', height: '20px' }} />
                </Link>
                <Link to="/mac" className="mac">Mac</Link>
                <Link to="/ipad" className="iPad">iPad</Link>
                <Link to="/iphone" className="iPhone">iPhone</Link>
                <Link to="/watch" className="Watch">Watch</Link>
                <Link to="/tv" className="TV">TV</Link>
                <Link to="/music" className="Music">Music</Link>
                <Link to="/" className="Support">Support</Link>
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
                    <FontAwesomeIcon icon={faClock} onClick={closeIcon}/>
                    </a>
                    <div className="search-sub-menu">
      <h3>Quick Links</h3>
      <ul>
      
      </ul>
    </div>
                </div>
                <div className="fade-screen"></div>
                <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'white', width: '15px', height: '15px' }} />

            </nav>
        </header>
    )
}

export default TopNav