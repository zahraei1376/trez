import React from 'react';
import "./menu.scss";
import { NavLink } from 'react-router-dom';

const Nav = () =>(
    <nav className="navbar margin-bottom-smal">
        <NavLink className="navbar__item" to="/" >صفحه اصلی</NavLink>
        <NavLink className="navbar__item" to="/Login" >ورود </NavLink>
        <NavLink className="navbar__item" to="/register" >ثبت نام</NavLink>
        <NavLink className="navbar__item" to="/forgotPass" >فراموشی پسورد </NavLink>
    </nav>
);

export default Nav;