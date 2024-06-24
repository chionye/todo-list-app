/** @format */

import { EmptyPropType } from "../../types";
import "./Empty.css";

export const Empty: React.FC<EmptyPropType> = ({ message }) => {
  return <div className='empty'>{message}</div>;
};
