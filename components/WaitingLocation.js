import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";
const Container = styled(View, "bg-white w-full h-full items-center pt-[50%]");
const TextStyle = styled(Text, "text-[#adadad] text-lg");

const WaitingLocation = () => {
  return (
    <Container>
      <TextStyle>Esperando tu ubicación...</TextStyle>
    </Container>
  );
};

export default WaitingLocation;
