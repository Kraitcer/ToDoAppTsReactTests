import { Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";

interface Props {
  checkboxName: string;
}

const CheckBoxList = ({ checkboxName }: Props) => {
  return (
    <Flex>
      <Checkbox size="lg" isInvalid>
        {checkboxName}
      </Checkbox>
    </Flex>
  );
};

export default CheckBoxList;
