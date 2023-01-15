import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";

const Container = styled(View, "flex-1 flex-row items-center justify-center ");
const TextStyled = styled(Text, "text-[#008f7e] text-base ");
const ImageStyled = styled(Image, "w-6 h-6 mr-2");

const SearchAddressBar = () => {
  return (
    <Container>
      <ImageStyled
        resizeMode="contain"
        source={require("./../assets/img/header/gps.png")}
      />
      <TextStyled>Agregar dirección de entrega </TextStyled>
    </Container>
  );
};

export default SearchAddressBar;
