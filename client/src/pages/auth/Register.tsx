
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Container, Button, Input } from "../../components";
import useAxiosRequest from "../../hooks/useAxiosRequest";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
    confirmpassword: "",
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
      if (formData.password === formData.confirmPassword) {
        const data = await sendRequest("post", "user/register", formData);
        setSuccess(data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }else{
        setError("Passwords do not match!");
      }
    } catch (error: any) {
      console.error("Error occurred during registration:", error.message);
      setError(error.message);
    } finally {
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
        <h1 className='title'>Sign Up</h1>
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
        <Input
          type={"password"}
          label={"Confirm Password"}
          name={"confirmPassword"}
          required={true}
          handleChange={(e) => handleFormChange(e)}
        />
        <div className='button-container'>
          <Button handleClick={handleFormSubmit} label='Create Account' showLoading={loading} />
          <NavLink to={"/login"} className='link mt'>
            Sign In
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default Register;
