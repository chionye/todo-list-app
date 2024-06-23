/** @format */

import { NavLink, useNavigate } from "react-router-dom";
import checklist from "../assets/Checklist.svg";
import logo from "../assets/logo.png";
import { Button } from "../../components";
import { Greetings } from "../../utils/functions";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavLink to={"#"} className={"logo"}>
        Good {Greetings()}
      </NavLink>
      <p className='welcome-text'>Log in or register to get started</p>
      <div className='button-container'>
        <Button handleClick={() => navigate("/login")} label='Login' />
        <Button
          handleClick={() => navigate("/register")}
          label='Register'
        />
      </div>
    </>
  );
};

export default Welcome;
