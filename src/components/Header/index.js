import React from 'react';
import "./Header.css";
import logo from "../../assets/img/logo.png";
import chevronLeft from "../../assets/img/chevron-left.svg";
import chevronRigth from "../../assets/img/chevron-right.svg";
import homeIcon from "../../assets/img/home.svg";
import searchIcon from "../../assets/img/search.svg";
import browseIcon from "../../assets/img/browse.svg";
import notificationIcon from "../../assets/img/notification.svg";
import friendsIcon from "../../assets/img/friends.svg";
import logIcon from "../../assets/img/log.svg";


const Header = () => {
    return(
        <header className='header'>
            <div className='header__info'>
                <img className='header__img' src= {logo} alt=''/>
                <h1 className='header__title'>My Music App</h1>
            </div>

            <div className='header__components'>
                <div className='changeWindow'>
                    <img className='changeWindow__img' src= {chevronLeft}/>
                    <img className='changeWindow__img' src= {chevronRigth}/>
                </div>
                <img className='changeWindow__house' src= {homeIcon}/>
                <div className='search'>
                    <img className='search__img' src= {searchIcon}/>
                    <input className='search__input' placeholder='What do you want to play'/>
                    <img className='search__browse' src= {browseIcon}/>
                </div>
                <div className='logIn'>
                    <img className='notification__img' src= {notificationIcon}/>
                    <img className='notification__friends' src= {friendsIcon}/>
                    <img className='notification__logIn' src= {logIcon}/>
                </div>
            </div>
        </header>
    )
};

export default Header;