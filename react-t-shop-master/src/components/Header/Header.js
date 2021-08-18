import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";

import styles from './Header.module.scss'

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img width={106} height={67} src="img/header/logo_header.svg" alt="Logotype" />
        </div>
      </Link>

      <div className='header_menu'>
        <a href='#' className='header_menu-item'>
          Одежда
        </a>
        <a href='#' className='header_menu-item'>
          Обувь
        </a>
        <a href='#' className='header_menu-item'>
          Скейты
        </a>
        <a href='#' className='header_menu-item'>
          Стафф
        </a>
      </div>


      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
