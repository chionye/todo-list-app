
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskForm } from "../components";
import { act } from "react";

jest.mock("@iconify/react", () => ({
  Icon: () => <span>icon</span>,
}));

describe("TaskForm Component", () => {
  const handleChange = jest.fn();
  const submit = jest.fn();
  const modal = jest.fn();
  const showloading = false;

  beforeEach(() => {
    render(
      <TaskForm
        handleChange={handleChange}
        submit={submit}
        modal={modal}
        showloading={showloading}
      />
    );
  });

  it("renders TaskForm correctly", () => {
    expect(screen.getByText("New Task")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("calls handleChange when input values change", () => {
    const titleInput = screen.getByLabelText("Title");

    act(() => {
      fireEvent.change(titleInput, { target: { value: "Test Title" } });
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls submit when the Add Task button is clicked", () => {
    const addButton = screen.getByText("Add Task");

    act(() => {
      fireEvent.click(addButton);
    });

    expect(submit).toHaveBeenCalled();
  });

  it("calls modal with false when the close button is clicked", () => {
    const closeButton = screen.getByText("icon");

    act(() => {
      fireEvent.click(closeButton);
    });

    expect(modal).toHaveBeenCalledWith(false);
  });
});
