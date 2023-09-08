import React, { useEffect, useState } from "react";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import AddTask from "../UI Components/AddTasks";
import TaskPad from "../UI Components/TaskPad";
import EditTask from "../UI Components/EditTask";
import { v4 as uuidv4 } from "uuid";
import EditSubTask from "../UI Components/EditSubTask";
import Footer from "../UI Components/Footer";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdDone, MdOutlineNotificationsActive } from "react-icons/md";

const ToDoListSection = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const [renderFilter, setRenderFilter] = useState("all");

  const visibleTodos =
    renderFilter === "all"
      ? todos
      : renderFilter === "active"
      ? todos.filter((t) => t.active === true)
      : todos.filter((t) => t.complited === true);

  const editTodo = (id: string, currentTaskName: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: currentTaskName }
          : todo
      )
    );
  };
  const completeTask = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, complited: !todo.complited, active: !todo.active }
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

  const complitedTask = todos.filter((t: any) => t.complited == true);
  const activeTask = todos.filter((t: any) => t.active == true);

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
            {visibleTodos.map((todo, index) =>
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
                  completeTask={(id: string) => completeTask(id)}
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
            onClick={() => setRenderFilter("all")}
            badge={todos.length}
            icon={<AiOutlineUnorderedList size={22} />}
            name={"all"}
          />
          <Footer
            onClick={() => setRenderFilter("active")}
            badge={activeTask.length}
            icon={<MdOutlineNotificationsActive size={22} />}
            name={"active"}
          />
          <Footer
            onClick={() => setRenderFilter("completed")}
            badge={complitedTask.length}
            icon={<MdDone size={22} />}
            name={"completed"}
          />
        </Flex>
      </VStack>
    </>
  );
};

export default ToDoListSection;
