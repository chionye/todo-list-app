/** @format */

import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo.png";
import { Logout } from "../../services/storage";

export const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to={"/"} className={"logo"}>
          <img
            src={logo}
            alt='welcome image'
            className='welcome-img'
            width={150}
          />
        </NavLink>
        <div>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isActive ? "activeNavLink" : isPending ? "navLink" : "navLink"
            }>
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "activeNavLink" : "navLink"
            }>
            About
          </NavLink>
        </div>
        <Button handleClick={Logout} label='log out' />
      </nav>
    </>
  );
};
