import { Button } from "@chakra-ui/react";

interface Props {
  buttonName: string;
  onClick: () => void;
  disabled: boolean;
}

const SectionButton = ({ buttonName, onClick, disabled }: Props) => {
  return (
    <Button
      isDisabled={disabled}
      colorScheme="orange"
      bg={"orange"}
      w="100%"
      borderRadius={0}
      color={"white"}
      fontSize={16}
      // marginBottom={1}
      // marginTop={1}
      paddingBottom={1}
      border={"none"}
      onClick={onClick}
      // type="submit"
    >
      {buttonName}
    </Button>
  );
};

export default SectionButton;
