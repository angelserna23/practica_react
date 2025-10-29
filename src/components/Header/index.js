import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import LibraryIcon from "../../assets/img/library.svg";
import homeIcon from "../../assets/img/home.svg";
import notificationIcon from "../../assets/img/notification.svg";
import friendsIcon from "../../assets/img/friends.svg";
import logIcon from "../../assets/img/log.svg";
import { HeaderStart, HeaderComponents, HeaderInfo, HeaderTitle, HeaderImg, ChangeWindowImg, ChangeWindowHouse, Login, NotificationImg } from "./styles";

const Header = () => {
  return (
    <HeaderStart>
      <HeaderInfo>
        <HeaderImg src={logo} alt='Logo My Music App' />
        <HeaderTitle>My Music App</HeaderTitle>
      </HeaderInfo>

      <HeaderComponents>
        <div className='changeWindow'>
          {/* Link a Library */}
          <Link to="/library" aria-label="Ir a Mi biblioteca">
            <ChangeWindowImg src={LibraryIcon} alt="Mi biblioteca" />
          </Link>
        </div>

        {/* Link a Home */}
        <Link to="/" aria-label="Ir al inicio">
          <ChangeWindowHouse src={homeIcon} alt="Inicio" />
        </Link>

        <Login>
          <NotificationImg src={notificationIcon} alt="Notificaciones" />
          <img className='notification__friends' src={friendsIcon} alt="Amigos" />
          <img className='notification__logIn' src={logIcon} alt="Login" />
        </Login>
      </HeaderComponents>
    </HeaderStart>
  );
};

export default Header;
