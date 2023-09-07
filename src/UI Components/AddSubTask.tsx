import { Flex, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";

interface Props {
  addSubTask: (data: string) => void;
}

const AddSubTask = ({ addSubTask }: Props) => {
  const [subTasksValue, setSubTasksValue] = useState("");

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    if (subTasksValue) {
      // console.log("value");
      // add todo
      addSubTask(subTasksValue);
      // clear form after submission
      setSubTasksValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack gap={0} mb={1}>
        <Input
          value={subTasksValue}
          borderLeftRadius={10}
          borderRightRadius={0}
          m={0}
          placeholder={"Add SubTask"}
          onChange={(e) => setSubTasksValue(e.target.value)}
        />
        <Flex
          bg={"orange.300"}
          h={10}
          w={"70px"}
          pt={2}
          pl={4}
          // pr={3}
          gap={2}
          color={"white"}
          _hover={{ bg: "orange.400" }}
          borderRightRadius={10}
        >
          <FiFolderPlus size="1.5rem" onClick={handleSubmit} />
        </Flex>
      </HStack>
    </form>
  );
};

export default AddSubTask;
