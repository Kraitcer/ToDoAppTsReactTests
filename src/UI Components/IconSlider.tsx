import { Image, Flex, Radio, RadioGroup, HStack } from "@chakra-ui/react";

import healthIcon1 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/Health 1.svg";
import healthIcon2 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/Health 2.svg";
import healthIcon3 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/Health 3.svg";
import healthIcon4 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/Health 4.svg";
import healthIcon5 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/Health 5.svg";

import emotionIcon1 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/emotion 1.svg";
import emotionIcon2 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/emotion 2.svg";
import emotionIcon3 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/emotion 3.svg";
import emotionIcon4 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/emotion 4.svg";
import emotionIcon5 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/emotion 5.svg";

import intellectIcon1 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/intellect 1.svg";
import intellectIcon2 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/intellect 2.svg";
import intellectIcon3 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/intellect 3.svg";
import intellectIcon4 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/intellect 4.svg";
import intellectIcon5 from "D:/Gleb Kraitser/Front End Home Work/Практика/TRacking App (React TypeScript )/Tracking App/src/assets/Image/EveningPage_YourEngineSection_Icons/intellect 5.svg";

import SliderItself from "./SliderItself";

interface Props {
  healthValue: (data: number) => void;
  emotionsValue: (data: number) => void;
  intellectValue: (data: number) => void;
}

const IconSlider = ({ healthValue, emotionsValue, intellectValue }: Props) => {
  const healthIcons = [
    { id: 1, image: healthIcon1 },
    { id: 2, image: healthIcon2 },
    { id: 3, image: healthIcon3 },
    { id: 4, image: healthIcon4 },
    { id: 5, image: healthIcon5 },
  ];
  const emotionIcons = [
    { id: 1, image: emotionIcon1 },
    { id: 2, image: emotionIcon2 },
    { id: 3, image: emotionIcon3 },
    { id: 4, image: emotionIcon4 },
    { id: 5, image: emotionIcon5 },
  ];
  const intellectIcons = [
    { id: 1, image: intellectIcon1 },
    { id: 2, image: intellectIcon2 },
    { id: 3, image: intellectIcon3 },
    { id: 4, image: intellectIcon4 },
    { id: 5, image: intellectIcon5 },
  ];
  return (
    <Flex alignItems={"center"} gap={2} flexDirection={"column"}>
      <SliderItself
        setValue={(data) => healthValue(data)}
        radioSetName={"Health"}
        icons={healthIcons}
      />
      <SliderItself
        setValue={(data) => emotionsValue(data)}
        radioSetName={"Emotions"}
        icons={emotionIcons}
      />
      <SliderItself
        setValue={(data) => intellectValue(data)}
        radioSetName={"Intellect"}
        icons={intellectIcons}
      />
    </Flex>
  );
};

export default IconSlider;
