import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Att_time_IWill_Smart from "./Att_time_IWill_Smart";
import SectionButton from "./SectionButton";
import { FormData } from "../TodayGoalsSection";
import InnerButton from "./InnerButton";

interface ChildComponentProps {
  register: UseFormRegister<FormData>; // Assuming FormData is the same type used in the parent component
  goalsData: FormData | string[] | number | any;
  onClick: () => void;
}

export const TodayGoalInput = ({
  register,
  goalsData,
  onClick,
}: ChildComponentProps) => {
  return (
    <>
      <HStack>
        <Att_time_IWill_Smart register={register} goalsData={goalsData} />
        <Flex>
          <SectionButton
            buttonName="S.M.A.R.T. ?"
            onClick={() => {
              onClick();
            }}
          />
        </Flex>
      </HStack>
    </>
  );
};

export default TodayGoalInput;
