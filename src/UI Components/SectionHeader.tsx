import { Heading } from "@chakra-ui/react";

interface Props {
  HeadingName: string;
}

const SectionHeader = ({ HeadingName }: Props) => {
  return (
    <Heading
      w="100%"
      //   w={260}
      bg={"blue.400"}
      textAlign={"center"}
      textTransform={"uppercase"}
      fontSize="22px"
      padding={3}
      color={"white"}
      // marginBottom={2}
    >
      {HeadingName}
    </Heading>
  );
};

export default SectionHeader;
