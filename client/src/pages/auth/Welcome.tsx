/** @format */

import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { Greetings } from "../../utils/functions";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className={"logo"}>
        Good {Greetings()}
      </h2>
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
