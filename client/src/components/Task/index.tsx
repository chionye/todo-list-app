/** @format */

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button, IconButton } from "../Button";
import "./Task.css";
import { Input, Container } from "../Input";
import { TaskContainerProps, TaskFormProps, TaskProps } from "../../types";

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
        <Button
          label='Add Task'
          handleClick={submit}
          showLoading={showloading}
        />
      </Container>
    </>
  );
};