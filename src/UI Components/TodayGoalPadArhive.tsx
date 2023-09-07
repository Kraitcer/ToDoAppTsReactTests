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
  children: string[];
  display: string;
  onDelete: () => void;
  onClick: () => void;
  //   disabled: () => void;
}

export const TodayGoalPad = ({
  register,
  goalsData,
  children,
  display,
  onDelete,
  onClick,
}: ChildComponentProps) => {
  return (
    <>
      <HStack display={display}>
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
      <HStack
        mt={1}
        gap={0}
        w={"556px"}
        display={display === "flex" ? "none" : "flex"}
      >
        <Flex
          bg={"blue.200"}
          // w={"29rem"}
          w={"480px"}
          h={10}
          p={1}
          pl={4}
          pr={2}
          borderLeftRadius={10}
        >
          <Text
            color={"blackAlpha.500"}
            fontSize={20}
            textTransform={"uppercase"}
            m={0}
            mr={2}
          >
            at
          </Text>
          <Text
            color={"white"}
            fontSize={20}
            textTransform={"uppercase"}
            m={0}
            mr={2}
          >
            {children[0]}
          </Text>
          <Text
            color={"blackAlpha.500"}
            fontSize={20}
            textTransform={"uppercase"}
            w={"70px"}
            m={0}
          >
            i will
          </Text>
          <Text
            w={"290px"}
            color={"white"}
            textAlign={"left"}
            fontSize={20}
            textTransform={"uppercase"}
            m={0}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
          >
            {children[1]}
          </Text>
        </Flex>
        <Flex>
          <InnerButton
            disabled={false}
            buttonName="delete"
            onClick={onDelete}
          />
        </Flex>
      </HStack>
    </>
  );
};

export default TodayGoalPad;
