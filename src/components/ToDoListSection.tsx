import React, { useEffect, useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import AddTask from "../UI Components/AddTasks";
import TaskPad from "../UI Components/TaskPad";
import EditTask from "../UI Components/EditTask";
import { v4 as uuidv4 } from "uuid";
import EditSubTask from "../UI Components/EditSubTask";
import Footer from "../UI Components/Footer";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";

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
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: currentTaskName }
          : todo
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
      {
        id: uuidv4(),
        task: todo,
        isEditing: false,
        active: true,
        complited: false,
      },
    ]);
    // console.log(todos);
  };

  const currentTask = todos.filter((t: any) => t.id == currentTodo);

  return (
    <>
      <VStack gap={0}>
        <AddTask
          addTodo={addTodo}
          placeHolder="Choose New Task"
          buttonName="Add Task"
        />
        <Flex w={"560px"} h={"34rem"} mb={0}>
          <Flex
            flexDirection={"column"}
            overflowY={"auto"}
            bg={"blue.100"}
            w={"100%"}
            h={"100%"}
            borderTopRadius={20}
            gap={2}
            pl={3}
            pt={3}
            pb={2}
          >
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <EditSubTask
                  key={index}
                  subTasks={todo}
                  editSubTask={(id: string, name: string) => editTodo(id, name)}
                />
              ) : (
                <TaskPad
                  children={todo.subTasks}
                  width={"76%"}
                  onDelete={deleteTask}
                  key={index}
                  task={todo}
                  editTask={(id: string, name: string) => editTodo(id, name)}
                />
              )
            )}
          </Flex>
        </Flex>
        <Flex
          bg={"blue.400"}
          w={"100%"}
          h={16}
          borderBottomRadius={20}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          <Footer
            badge={todos.length}
            icon={<AiOutlineUnorderedList size={22} />}
            name={"all"}
          />
          <Footer
            badge={todos.length}
            icon={<MdDone size={22} />}
            name={"completed"}
          />
          <Footer
            badge={todos.length}
            icon={<IoTrashBinSharp size={22} />}
            name={"trash"}
          />
        </Flex>
      </VStack>
    </>
  );
};

export default ToDoListSection;
