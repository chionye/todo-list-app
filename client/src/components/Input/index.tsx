import { ContainerProps, InputProps } from "../../types";
import "./Input.css";



export const Input: React.FC<InputProps> = ({
  label,
  handleChange,
  type,
  name,
  required,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        title={name}
        id={name}
        required={required}
        className='input'
        onChange={handleChange}
      />
    </div>
  );
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='form'>{children}</div>;
};
