
import "./Button.css";
import { Loader } from "../";
import React from "react";
import { ButtonProps, IconProps, OutlineProps } from "../../types";

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