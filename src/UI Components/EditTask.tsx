import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import TaskPad from "./TaskPad";
import EditSubTask from "./EditSubTask";
import SectionButton from "./SectionButton";
import { v4 as uuidv4 } from "uuid";

interface Props {
  task: any;
  editTask: (id: string, currentTaskName: string) => void;
  currentTask: any[];
  onClose: () => void;
  subTasksValue: (v: any[]) => void;
}

const EditTask = ({
  task,
  editTask,
  currentTask,
  onClose,
  subTasksValue,
}: Props) => {
  useEffect(() => {
    if (currentTask.length > 0) {
      const subTasksFromStorage =
        localStorage.getItem(`subTask_${currentTask[0].task}`) || [];
      if (typeof subTasksFromStorage === "string") {
        const savedSubTasks = JSON.parse(subTasksFromStorage);
        setSubTasks(savedSubTasks);
        console.log("from LS", savedSubTasks);
      }
    }
  }, []);

  const [taskValue, setTaskValue] = useState("");

  const [subTasks, setSubTasks] = useState<any[]>([]);

  const addSubTask = (subTask: any) => {
    setSubTasks([
      ...subTasks,
      {
        id: uuidv4(),
        perentTask: currentTask[0].task,
        task: subTask,
        isEditing: false,
      },
    ]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (subTasks.length > 0) subTasksValue(subTasks);
    if (taskValue) editTask(currentTask[0].id, taskValue);
    onClose();
    console.log("currentTask from editTask", currentTask);
  };

  const deleteSubTask = (id: string) => {
    const newSubTasks = subTasks.filter((subTask) => subTask.id !== id);
    setSubTasks(newSubTasks);
  };
  const editSubTasks = (subTaskValue: any, id: string) => {
    const newSubTasks = subTasks.map((subTask) =>
      subTask.id === id
        ? { ...subTask, task: subTaskValue, isEditing: !subTask.isEditing }
        : subTask
    );
    setSubTasks(newSubTasks);
    // localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editCurrentSubTask = (id: string) => {
    setSubTasks(
      subTasks.map((subTask) =>
        subTask.id === id
          ? { ...subTask, isEditing: !subTask.isEditing }
          : subTask
      )
    );
  };

  return (
    <>
      <Flex flexDirection={"column"} gap={1}>
        <form onSubmit={handleSubmit}>
          <Input
            value={taskValue}
            placeholder={!taskValue ? currentTask[0].task : taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            borderRadius={10}
            mb={1}
          />
        </form>
        <AddSubTask addSubTask={addSubTask} />
        {subTasks.map((subTask, index) =>
          subTask.isEditing ? (
            <EditSubTask
              key={index}
              subTasks={subTask}
              editSubTask={editSubTasks}
            />
          ) : (
            <TaskPad
              children={0}
              width={"25rem"}
              onDelete={deleteSubTask}
              key={index}
              task={subTask}
              editTask={editCurrentSubTask}
            />
          )
        )}
        <form onSubmit={handleSubmit}>
          <Flex mb={1}>
            <SectionButton
              buttonName="fuck"
              onClick={() => {
                handleSubmit;
              }}
            />
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default EditTask;
