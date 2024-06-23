
import "./Button.css";
import { Loader } from "../";
import React from "react";

interface ButtonProps {
  label: string;
  showLoading?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface OutlineProps {
  title: string;
  cn?:string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IconProps {
  children: React.ReactNode;
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

export const Outline:React.FC<OutlineProps> = ({ handleClick, cn, title }) => {
    return (
      <button className={`${cn ? cn : "outline"}`} onClick={handleClick}>
        {title}
      </button>
    );
  };

export const IconButton: React.FC<IconProps> = ({ children, handleClick }) => {
  return (
    <button className='icon' onClick={handleClick}>
      {children}
    </button>
  );
};