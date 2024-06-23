
import "./Button.css";
import { Loader } from "../";

interface ButtonProps {
  label: string;
  showLoading?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  handleClick,
  showLoading,
}) => {
  return (
    <button onClick={handleClick} className='button'>
      {showLoading ? <Loader /> : label}
    </button>
  );
};
