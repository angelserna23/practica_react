import React from 'react';
import logo from "../../assets/img/logo.png";
import chevronLeft from "../../assets/img/chevron-left.svg";
import chevronRigth from "../../assets/img/chevron-right.svg";
import homeIcon from "../../assets/img/home.svg";
import notificationIcon from "../../assets/img/notification.svg";
import friendsIcon from "../../assets/img/friends.svg";
import logIcon from "../../assets/img/log.svg";
import SearchBar from '../SearchBar';
import { HeaderStart, HeaderComponents, HeaderInfo, HeaderTitle, HeaderImg, ChangeWindowImg, ChangeWindowHouse, Login, NotificationImg } from "./styles";

const Header = () => {
    return(
        <HeaderStart>
            <HeaderInfo>
                <HeaderImg src= {logo} alt=''/>
                <HeaderTitle>My Music App</HeaderTitle>
            </HeaderInfo>

            <HeaderComponents>
                <div className='changeWindow'>
                    <ChangeWindowImg src= {chevronLeft}/>
                    <ChangeWindowImg src= {chevronRigth}/>
                </div>
                <ChangeWindowHouse src= {homeIcon}/>
                <Login>
                    <NotificationImg src= {notificationIcon}/>
                    <img className='notification__friends' src= {friendsIcon}/>
                    <img className='notification__logIn' src= {logIcon}/>
                </Login>
            </HeaderComponents>
        </HeaderStart>
    )
};

export default Header;