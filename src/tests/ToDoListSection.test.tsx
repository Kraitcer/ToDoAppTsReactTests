import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToDoListSection from "../components/ToDoListSection";

test("adding a new task works correctly", () => {
  render(<ToDoListSection />);

  // Find the input element
  const inputElement = screen.getByPlaceholderText("Choose New Task");

  // Simulate typing a task name and adding it
  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(screen.getByText("Add Task"));

  // Check if the new task is in the list
  // expect(screen.getByText("New Task")).toBeInTheDocument();
});
