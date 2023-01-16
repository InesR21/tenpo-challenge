import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";

const Container = styled(
  View,
  "bg-[#d4f9f5] w-full items-center flex-row justify-center py-10"
);
const TextStyle = styled(Text, "text-[#008f7e] text-lg");
const ImageStyled = styled(Image, "w-6 h-6 mr-4");

const HeaderMaps = () => {
  return (
    <Container>
      <ImageStyled
        resizeMode="contain"
        source={require("./../assets/img/header/gps.png")}
      />
      <TextStyle>Agregar dirección de entrega</TextStyle>
    </Container>
  );
};

export default HeaderMaps;
