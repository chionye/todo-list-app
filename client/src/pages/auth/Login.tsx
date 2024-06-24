/** @format */

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Container, Button, Input } from "../../components";
import useAxiosRequest from "../../hooks/useAxiosRequest";
import { setCookie } from "../../services/storage";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { loading, sendRequest } = useAxiosRequest<any>();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const data = await sendRequest("post", "user/login", formData);
      const { accessToken, ...user } = data;
      setCookie("@user", JSON.stringify(user), 1);
      setCookie("@token", JSON.stringify(accessToken), 1);
      setSuccess(data.message);
      navigate("/dashboard/todo");
    } catch (error: any) {
      console.error("Error occurred during registration:", error.message);
      setError(error.message);
    }finally{
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
  };

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
          handleChange={(e) => handleFormChange(e)}
        />
        <Input
          type={"password"}
          label={"Password"}
          name={"password"}
          required={true}
          handleChange={(e) => handleFormChange(e)}
        />
        <div className='button-container'>
          <Button
            handleClick={handleFormSubmit}
            label='Login'
            showLoading={loading}
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
