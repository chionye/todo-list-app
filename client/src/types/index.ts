/** @format */

export interface TaskType {
  id: number;
  userId?: number;
  title: string;
  completed: boolean;
}


export interface AlertProps {
  status: string;
  message: string;
}

export interface ButtonProps {
  label: string;
  showLoading?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface OutlineProps {
  title: string;
  cn?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IconProps {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EmptyPropType {
  message: string;
}

export interface InputProps {
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  name: string;
  required: boolean;
}

export interface ContainerProps {
    children: React.ReactNode
}

export interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
}

export interface TaskProps {
  title: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  completed: boolean;
  setCheck: (status: boolean, key: number, id: number) => Promise<void>;
  deleteTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
  taskId: number;
  position: number;
}

export interface TaskFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
  modal: (show: boolean) => void;
  showloading: boolean;
}

export interface TaskContainerProps {
  children: React.ReactNode;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
}