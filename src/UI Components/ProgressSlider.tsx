import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  // register: UseFormRegister<FormData>;
  sliderName: String;
  setValue: (data: number) => void;
}

const ProgressSlider = ({ setValue, sliderName }: Props) => {
  const [sliderValue, setSliderValue] = useState(70);
  return (
    <Flex flexDirection={"column"} marginBottom={0}>
      <Text fontSize={18} marginBottom={0}>
        {sliderName}
      </Text>
      <HStack>
        <Slider
          value={sliderValue}
          onChange={(val) => {
            setSliderValue(val);
            setValue(val);
            // console.log(sliderValue);
          }}
        >
          <SliderTrack h={8} bg={"orange.200"} borderRadius={0}>
            <SliderFilledTrack bg={"blue.200"} />
          </SliderTrack>
          <SliderThumb bg={"orange"} boxSize={8} rounded={"none"} w={1} />
        </Slider>
        <Box
          h={8}
          w="60px"
          bg="blue.400"
          borderRadius={0}
          border={"none"}
          color={"white"}
          fontSize={22}
          paddingLeft={2}
          paddingRight={2}
          alignItems={"left"}
          display={"Flex"}
          flexDirection={"row-reverse"}
        >
          {sliderValue}
        </Box>
      </HStack>
    </Flex>
  );
};

export default ProgressSlider;
