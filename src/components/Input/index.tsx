import "./Input.css";

interface InputProps {
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  name: string;
  required: boolean;
}

interface ContainerProps {
    children: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  label,
  handleChange,
  type,
  name,
  required,
}) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        title={name}
        required={required}
        className='input'
        onChange={handleChange}
      />
    </div>
  );
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <form className='form'>{children}</form>;
};
