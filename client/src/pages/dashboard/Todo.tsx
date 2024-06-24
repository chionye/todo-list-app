/** @format */

import { useState, useEffect } from "react";
import {
  Button,
  Empty,
  Modal,
  Task,
  Outline,
  TaskForm,
  TaskContainer,
  Loader,
} from "../../components";
import { getCookieData } from "../../services/storage";
import useAxiosRequest from "../../hooks/useAxiosRequest";
import { toast } from "react-toastify";
import { filterTasks } from "../../services/helpers";
import { TaskType } from "../../types";

const Todo = () => {
  const user = getCookieData("user");
  const [tasks, setTasks] = useState<TaskType[]>(user?.todos || []);
  const [modal, setModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<TaskType[]>(user?.todos || []);
  const [category] = useState<string[]>(["All", "Active", "Completed"]);
  const [editData, setEditData] = useState<Partial<TaskType>>({});
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [task, setTask] = useState<Record<string, string>>({
    userId: user?.id || "",
    title: "",
  });
  const { loading, sendRequest } = useAxiosRequest<any>();

  const deleteTask = async (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    try {
      await sendRequest("delete", `todo/${id}`, null);
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      setFilter(updatedTasks);
      toast("Task successfully deleted");
    } catch (error: any) {
      console.error("Error occurred during delete:", error.message);
      toast(error.message);
    }
  };

  const addTask = () => {
    setModal(true);
  };

  const saveTask = async () => {
    try {
      const data = await sendRequest("post", "todo", task);
      const newTask = data.data;
      setTasks([newTask, ...tasks]);
      setFilter([newTask, ...tasks]);
      setModal(false);
      toast("Task added successfully");
    } catch (error: any) {
      console.error("Error occurred during save:", error.message);
      toast(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTask({ ...task, [target.name]: target.value });
  };

  const handleFilterChange = (category: string) => {
    filterTasks(category, tasks, setActiveCategory, setFilter);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleCheck = async (status: boolean, key: number, id: number) => {
    try {
      await sendRequest("put", `todo/${id}`, { completed: status });
      const updatedTasks = tasks.map((task, index) =>
        index === key ? { ...task, completed: status } : task
      );
      setTasks(updatedTasks);
      setFilter(updatedTasks);
      toast(status ? "Task marked as completed" : "Task marked as uncompleted");
    } catch (error: any) {
      console.error("Error occurred during update:", error.message);
      toast(error.message);
    }
  };

  // const filterTasks = (category: string) => {
  //   setActiveCategory(category);
  //   switch (category) {
  //     case "Active":
  //       setFilter(tasks.filter((task) => !task.completed));
  //       break;
  //     case "Completed":
  //       setFilter(tasks.filter((task) => task.completed));
  //       break;
  //     default:
  //       setFilter(tasks);
  //   }
  // };

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await sendRequest("get", "", null);
      const response = data;

      setTasks(response);
      setFilter(response);
    };
    fetchTodo();
  }, []);

  return (
    <>
      <main>
        <section className='container'>
          <div className='flex-group'>
            <h1 className='heading'>My Tasks</h1>
            <Button label='New Task' handleClick={addTask} />
          </div>

          <div className='grid'>
            {category.map((item, key) => (
              <Outline
                key={key}
                handleClick={() =>
                  handleFilterChange(item)
                }
                title={item}
                cn={item === activeCategory ? "active" : ""}
              />
            ))}
          </div>
          {loading ? (
            <div className='loader-container'>
              <Loader />
            </div>
          ) : (
            <TaskContainer>
              {filter.length > 0 ? (
                filter.map((item, key) => (
                  <Task
                    key={key}
                    taskId={item.id}
                    title={item.title}
                    completed={item.completed}
                    setCheck={handleCheck}
                    position={key}
                    handleChange={handleEditChange}
                    deleteTask={(e) => deleteTask(e, item.id)}
                  />
                ))
              ) : (
                <Empty message={"No data"} />
              )}
            </TaskContainer>
          )}
        </section>
        <Modal show={modal} close={() => setModal(false)}>
          <TaskForm
            handleChange={handleChange}
            submit={saveTask}
            modal={setModal}
            showloading={loading}
          />
        </Modal>
      </main>
    </>
  );
};

export default Todo;
