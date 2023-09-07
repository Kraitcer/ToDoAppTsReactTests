import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import SectionButton from "./SectionButton";

interface Prop {
  addTodo: (data: string) => void;
  placeHolder: string;
  buttonName: string;
}

const AddTask = ({ addTodo, placeHolder, buttonName }: Prop) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // console.log("value");
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex mb={4}>
        <Input
          type="text"
          borderRightRadius={0}
          borderColor={"blue.400"}
          placeholder={placeHolder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Flex>
          <SectionButton
            buttonName={buttonName}
            onClick={() => {
              // console.log(value);
            }}
          />
        </Flex>
      </Flex>
    </form>
  );
};

export default AddTask;
