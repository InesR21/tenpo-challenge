import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";

const ImageContainer = styled(
  View,
  "w-44 h-20 mb-6 justify-center  relative  "
);
const ImageStyled = styled(Image, " w-full h-full");
const Title = styled(
  Text,
  "font-bold text-sm text-center color-white absolute inset-x-0 "
);

const CategoriesItem = ({ categorie = {} }) => {
  return (
    <ImageContainer>
      <ImageStyled source={categorie.img} />
      <Title>{categorie.name}</Title>
    </ImageContainer>
  );
};

export default CategoriesItem;
