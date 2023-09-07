import { FC } from "react";
import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SetTime: FC = () => {
  return (
    <FormControl id="time">
      <InputGroup>
        <Input
          type="time"
          //   placeholder="Select time"
          // Apply your custom styles here
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.200"
          _hover={{ borderColor: "gray.300" }}
          _focus={{ borderColor: "blue.400", boxShadow: "outline" }}
          //   paddingRight="2.5rem"
          onClick={(e) => {
            const input = e.target as HTMLInputElement;
            input.type = "text";
            input.click();
            input.type = "time";
          }}
          css={{
            "&::-webkit-calendar-picker-indicator": {
              display: "none",
            },
            // "&::after": {
            //   content: '""',
            //   position: "absolute",
            //   top: "50%",
            //   right: "0.75rem",
            //   transform: "translateY(-50%)",
            //   pointerEvents: "none",
            //   borderLeft: "0.25rem solid transparent",
            //   borderRight: "0.25rem solid transparent",
            //   borderTop: "0.4rem solid gray",
            // },
          }}
        />
        {/* <ChevronDownIcon
          color="gray.400"
          position="absolute"
          right="0.75rem"
          top="50%"
          transform="translateY(-50%)"
        /> */}
      </InputGroup>
    </FormControl>
  );
};

export default SetTime;
