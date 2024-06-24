/** @format */

import { filterTasks } from "../services/helpers"; // Adjust the import path
import { TaskType } from "../types/"; // Adjust the import path

describe("filterTasks function", () => {
  let tasks: TaskType[];
  let setActiveCategory: jest.Mock;
  let setFilter: jest.Mock;

  beforeEach(() => {
    tasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
      { id: 3, title: "Task 3", completed: false },
    ];

    setActiveCategory = jest.fn();
    setFilter = jest.fn();
  });

  it('should set the active category to "Active" and filter active tasks', () => {
    filterTasks("Active", tasks, setActiveCategory, setFilter);

    expect(setActiveCategory).toHaveBeenCalledWith("Active");
    expect(setFilter).toHaveBeenCalledWith([
      { id: 1, title: "Task 1", completed: false },
      { id: 3, title: "Task 3", completed: false },
    ]);
  });

  it('should set the active category to "Completed" and filter completed tasks', () => {
    filterTasks("Completed", tasks, setActiveCategory, setFilter);

    expect(setActiveCategory).toHaveBeenCalledWith("Completed");
    expect(setFilter).toHaveBeenCalledWith([
      { id: 2, title: "Task 2", completed: true },
    ]);
  });

  it('should set the active category to "All" and return all tasks', () => {
    filterTasks("All", tasks, setActiveCategory, setFilter);

    expect(setActiveCategory).toHaveBeenCalledWith("All");
    expect(setFilter).toHaveBeenCalledWith(tasks);
  });
});
