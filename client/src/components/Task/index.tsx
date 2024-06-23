/** @format */

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button, IconButton } from "../Button";
import "./Task.css";
import { Input, Container } from "../Input";

interface TaskProps {
  title: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  completed: boolean;
  setCheck: (status: boolean, key: number, id: number) => Promise<void>;
  deleteTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
  taskId: number;
  position: number;
}

interface TaskFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
  modal: (show: boolean) => void;
  showloading: boolean;
}

export const Task: React.FC<TaskProps> = ({
  title,
  handleChange,
  completed,
  setCheck,
  position,
  deleteTask,
  taskId,
}) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  const handleCheck = async () => {
    setIsCompleted(!isCompleted);
    await setCheck(!isCompleted, position, taskId);
  };

  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);

  return (
    <div className='task' id={`task-${taskId}`}>
      <div className='flex-start'>
        <input
          type='checkbox'
          name='completed'
          onChange={handleCheck}
          checked={isCompleted}
        />
        <div className='content'>
          <input
            className={`task-title ${isCompleted ? "strike" : ""}`}
            type='text'
            name='title'
            placeholder={title}
            onChange={handleChange}
            disabled
            onFocus={(e) => (e.target.value = e.target.placeholder)}
          />
          <div className='other'>
            <Button label='Delete' handleClick={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const TaskContainer: React.FC<TaskContainerProps> = ({ children }) => {
  return <div id='tasks'>{children}</div>;
};

export const TaskForm: React.FC<TaskFormProps> = ({
  handleChange,
  submit,
  modal,
  showloading,
}) => {
  const closeModal = () => {
    modal(false);
  };

  return (
    <>
      <div className='flex-group'>
        <h2 className='task-title'>New Task</h2>
        <IconButton handleClick={closeModal}>
          <Icon icon='material-symbols:close-rounded' width={20} />
        </IconButton>
      </div>
      <Container>
        <Input
          label='Title'
          type='text'
          name='title'
          required
          handleChange={handleChange}
        />
        <Input
          label='Description'
          type='text'
          name='description'
          required
          handleChange={handleChange}
        />
        <Button
          label='Add Task'
          handleClick={submit}
          showLoading={showloading}
        />
      </Container>
    </>
  );
};