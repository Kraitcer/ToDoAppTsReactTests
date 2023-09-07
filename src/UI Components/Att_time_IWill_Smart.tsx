import { Flex, Input, Text } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../ChooseGoals";
import { useState } from "react";

interface ChildComponentProps {
  register: UseFormRegister<FormData>; // Assuming FormData is the same type used in the parent component
  goalsData: FormData | string[] | number | any;
}

const Att_time_IWill_Smart = ({ register, goalsData }: ChildComponentProps) => {
  return (
    <>
      <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={30} m={0}>
          AT
        </Text>
        <Input
          // {...register("")}
          {...register(goalsData[0])}
          type="time"
          w={"150px"}
          padding={1}
          fontSize={20}
        />
        <Input {...register(goalsData[1])} placeholder="I WILL" />
      </Flex>
    </>
  );
};

export default Att_time_IWill_Smart;
