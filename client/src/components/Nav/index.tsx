/** @format */

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        {location.pathname === "/login" ? (
          <Button handleClick={() => navigate("/register")} label='register' />
        ) : (
          <Button handleClick={() => navigate("/login")} label='log in' />
        )}
      </nav>
    </>
  );
};
