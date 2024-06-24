/** @format */

import { NavLink } from "react-router-dom";
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
        <div className='flex-link'>
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
        <NavLink to={"#"} onClick={Logout} className={"logout"}>
          log out
        </NavLink>
      </nav>
    </>
  );
};
