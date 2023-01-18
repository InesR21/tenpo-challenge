import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { fontStyles } from "../utils/FontFamilys";

const ImageContainer = styled(View, "w-44 h-20 mb-4 justify-center relative");
const ImageStyled = styled(Image, " w-full h-full");
const Title = styled(
  Text,
  "font-bold text-base text-center color-white absolute inset-x-0 tracking-[2em] "
);

const CategoriesItem = ({ categorie = {} }) => {
  return (
    <ImageContainer>
      <ImageStyled source={categorie.img} />
      <Title style={fontStyles.GothamBold}>{categorie.name}</Title>
    </ImageContainer>
  );
};

export default CategoriesItem;
