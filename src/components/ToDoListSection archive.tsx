import React, { useEffect, useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import AddTask from "../UI Components/AddTasks";
import TaskPad from "../UI Components/TaskPad";
import AllModal from "../UI Components/AllModal";
import EditTask from "../UI Components/EditTask";
import { v4 as uuidv4 } from "uuid";

const ToDoListSection = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const closeModal1 = () => setIsOpen1(false);
  const openModal1 = (id: string) => {
    setIsOpen1(true);
    setCurrentTodo(id);
  };

  const [todos, setTodos] = useState<any[]>([]);

  const [currentTodo, setCurrentTodo] = useState<string>();

  const editTodo = (id: string, currentTaskName: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: currentTaskName } : todo
      )
    );
  };

  const deleteTask = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addTodo = (todo: any) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, subTasks: 0 },
    ]);
    console.log(todos);
  };

  const currentTask = todos.filter((t: any) => t.id == currentTodo);

  return (
    <>
      <AllModal
        size="lg"
        title={"Edit the task"}
        onOpen={isOpen1}
        onClose={closeModal1}
        children={
          <EditTask
            editTask={(id: string, name) => editTodo(id, name)}
            subTasksValue={(subTasksValues) => {
              if (subTasksValues.length > 0) {
                // console.log("inishall", subTasksValues);
                setTodos(
                  todos.map((todo) =>
                    todo.task === subTasksValues[0].perentTask
                      ? { ...todo, subTasks: subTasksValues.length }
                      : todo
                  )
                );
                localStorage.setItem(
                  `subTask_${subTasksValues[0].perentTask}`,
                  JSON.stringify(subTasksValues)
                );
              }
            }}
            task={todos}
            currentTask={currentTask}
            onClose={() => {
              setIsOpen1(false);
            }}
          />
        }
      />
      <VStack gap={0}>
        <AddTask
          addTodo={addTodo}
          placeHolder="Choose New Task"
          buttonName="Add Task"
        />
        <Flex w={"560px"} h={"34rem"} flexDirection={"row"} mb={0}>
          <Flex
            overflowY={"auto"}
            bg={"blue.100"}
            w={"100%"}
            borderTopRadius={20}
            gap={2}
            pl={3}
            pt={3}
            pb={2}
            wrap={"wrap"}
          >
            {todos.map((todo, index) => (
              <TaskPad
                children={todo.subTasks}
                width={"190px"}
                onDelete={deleteTask}
                key={index}
                task={todo}
                editTask={(id) => {
                  openModal1(id);
                }}
              />
            ))}
          </Flex>
        </Flex>
        <Flex bg={"blue.400"} w={"100%"} h={16} borderBottomRadius={20}></Flex>
      </VStack>
    </>
  );
};

export default ToDoListSection;
