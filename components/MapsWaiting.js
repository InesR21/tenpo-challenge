import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { fontStyles } from "../utils/FontFamilys";

const Container = styled(View, "bg-white w-full h-full items-center pt-[50%]");
const TextStyle = styled(Text, "text-[#adadad] text-lg");

const MapsWaiting = () => {
  return (
    <Container>
      <TextStyle style={fontStyles.GothamLight}>
        Esperando tu ubicación...
      </TextStyle>
    </Container>
  );
};

export default MapsWaiting;
