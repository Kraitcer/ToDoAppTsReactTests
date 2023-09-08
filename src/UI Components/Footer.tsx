import { Flex, Text, Badge, background } from "@chakra-ui/react";
import React from "react";

interface FooterProps {
  badge: number;
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
}

const Footer = ({ badge, icon, name, onClick }: FooterProps) => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        bg={"blue.100"}
        // pl={3}
        // pr={3}
        p={2}
        borderRadius={20}
        cursor={"pointer"}
        _hover={{ bg: "orange.400", color: "white" }}
        onClick={onClick}
      >
        <Badge borderRadius={50} h={8} w={8} pt={1.5}>
          {badge}
        </Badge>
        <Text
          color={"blue.400"}
          textTransform={"uppercase"}
          fontSize={20}
          p={0}
          m={0}
          _hover={{ color: "white" }}
        >
          {name}
        </Text>
        <Flex color={"blue.400"}>{icon}</Flex>
      </Flex>
    </>
  );
};

export default Footer;
