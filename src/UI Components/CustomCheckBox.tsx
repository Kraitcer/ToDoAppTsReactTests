import { useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { FaQuestion, FaExclamation } from "react-icons/fa";
import { QuestionOutlineIcon, WarningIcon } from "@chakra-ui/icons";

import { AiOutlineExclamation, AiOutlineQuestion } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "../ChooseGoals";

interface Props {
  onChange: () => void;
  checked: any;
}

const CustomCheckbox = ({ checked, onChange }: Props) => {
  const [checkBoxData, setCheckBoxData] = useState(false);

  const handleCheckboxChange = () => {
    onChange();
    setCheckBoxData(!checkBoxData);
  };
  const checkBoxIcon = checkBoxData ? (
    <FaExclamation color="white" />
  ) : (
    <FaQuestion color="orange" />
  );

  return (
    <Checkbox
      // {...checked}
      checked={checked}
      onChange={handleCheckboxChange}
      size={"lg"}
      bg={checkBoxData ? "blue" : "orange"}
    />
  );
  // ==========================================CUSTOM CHECKBOX========================
  //   <Checkbox
  //     {...checked}
  //     onChange={handleCheckboxChange}
  //     // bg={"blue"}
  //     size={"50px"}
  //     icon={checkBoxIcon}
  //     colorScheme={checkBoxData ? "blue" : "orange"}
  //   />
  // );
};

export default CustomCheckbox;
