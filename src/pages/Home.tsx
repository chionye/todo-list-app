/** @format */

import { NavLink, useNavigate } from "react-router-dom";
import checklist from "../assets/Checklist.svg";
import logo from "../assets/logo.png";
import { Button } from "../components";
import {Greetings} from "../utils/functions";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='welcome-container'>
      <div className='welcome-left'>
        <div className='welcome-logo'>
          <img
            src={logo}
            alt='welcome image'
            className='welcome-img'
            width={150}
          />
        </div>
        <div className='welcome-content'>
          <NavLink to={"#"} className={"logo"}>
            Good {Greetings()}
          </NavLink>
          <p className='welcome-text'>Log in or register to get started</p>
          <div className='button-container'>
            <Button handleClick={() => navigate("/auth/login")} label='Login' />
            <Button
              handleClick={() => navigate("/auth/register")}
              label='Register'
            />
          </div>
        </div>
      </div>
      <div className='welcome-right'>
        <img
          src={checklist}
          alt='welcome image'
          className='welcome-img'
          width={300}
        />
      </div>
    </div>
  );
};

export default Home;
