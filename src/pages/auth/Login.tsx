/** @format */

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Container, Button, Input } from "../../components";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  return (
    <div className='wrapper'>
      {error ? <Alert status={"error"} message={error} /> : null}
      {success ? <Alert status={"success"} message={success} /> : null}
        <Container>
          <h1 className='title'>Sign In</h1>
          <Input
            type={"email"}
            label={"Email"}
            name={"email"}
            required={true}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Password"}
            name={"password"}
            required={true}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <div className='button-container'>
            <Button
              handleClick={() => console.log("test")}
              label='Login'
            />
            <Link to={"/register"} className='link mt'>
              Create Account
            </Link>
          </div>
        </Container>
    </div>
  );
}

export default Login;
