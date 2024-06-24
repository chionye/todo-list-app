/** @format */

import { Icon } from "@iconify/react";
import "./Alert.css";
import { AlertProps } from "../../types";


export const Alert: React.FC<AlertProps> = ({ status, message }) => {
  return (
    <div className={`alert ${status === "success" ? "success" : "error"}`}>
      <Icon
        icon={
          status === "success"
            ? "mdi:checkbox-marked-circle"
            : "ic:baseline-error"
        }
        width={20}
        className='mr'
      />
      {message}
    </div>
  );
};
