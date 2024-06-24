/** @format */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Todo from "../pages/dashboard/Todo";
import useAxiosRequest from "../hooks/useAxiosRequest";

// Mock the getCookieData function
jest.mock("../services/storage", () => ({
  getCookieData: jest.fn().mockReturnValue({
    id: "1",
    email: "test@example.com",
    todos: [
      { id: 1, userId: 1, title: "Test Task 1", completed: false },
      { id: 2, userId: 1, title: "Test Task 2", completed: true },
    ],
  }),
}));

// Mock the useAxiosRequest hook
jest.mock("../hooks/useAxiosRequest", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    loading: false,
    sendRequest: jest.fn().mockResolvedValue({
      data: [
        { id: 1, userId: 1, title: "Test Task 1", completed: false },
        { id: 2, userId: 1, title: "Test Task 2", completed: true },
      ],
    }),
  }),
}));

describe("Todo Component", () => {
  it("renders the Todo component", async () => {
    render(<Todo />);

    expect(screen.getByText("My Tasks")).toBeInTheDocument();

    // Check if the sendRequest function was called correctly
    const { sendRequest } = useAxiosRequest();
    expect(sendRequest).toHaveBeenCalledWith("get", "", null);
  });
});
