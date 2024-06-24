
import { TaskType } from "../types";


export const filterTasks = (
  category: string,
  tasks: TaskType[],
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>,
  setFilter: React.Dispatch<React.SetStateAction<TaskType[]>>
) => {
  setActiveCategory(category);
  switch (category) {
    case "Active":
      setFilter(tasks.filter((task) => !task.completed));
      break;
    case "Completed":
      setFilter(tasks.filter((task) => task.completed));
      break;
    default:
      setFilter(tasks);
  }
};

export const Greetings = () => {
  const myDate = new Date();
  const hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "Morning";
  else if (hours >= 12 && hours <= 17) greet = "Afternoon";
  else if (hours >= 17 && hours <= 24) greet = "Evening";

  return greet;
};
