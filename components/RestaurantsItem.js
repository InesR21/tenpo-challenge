import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const Container = styled(
  View,
  " py-2 mb-6  px-2 justify-center relative  items-center rounded-xl "
);
const ImageStyled = styled(Image, "w-24 h-24 mb-2 rounded-xl");
const TextContainer = styled(
  View,
  "flex-row justify-between w-28 items-center px-0.5"
);
const ViewScoreStyled = styled(View, "flex-row items-center");
const TextStyled = styled(Text, " text-xs text-center");
const ImageStart = styled(Image, "w-2 h-2 mr-1");

const ViewDiscount = styled(
  View,
  "absolute top-0 right-0 bg-[#00BAA4] rounded-full w-9 h-9 z-10 items-center justify-center"
);
const TextDiscount = styled(
  Text,
  "text-white text-[9px] uppercase text-center"
);

const RestaurantsItem = ({ restaurant = {} }) => {
  if (Object.keys(restaurant).length === 0) return null;
  const { discount, img, name, score, time } = restaurant;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RestaurantDetails", { restaurant })}
    >
      <Container>
        <ViewDiscount>
          <TextDiscount>{discount}</TextDiscount>
        </ViewDiscount>
        <ImageStyled source={img} />
        <TextStyled>{name}</TextStyled>
        <TextContainer>
          <ViewScoreStyled>
            <ImageStart source={require("./../assets/img/star.png")} />
            <TextStyled>{score}</TextStyled>
          </ViewScoreStyled>
          <TextStyled>{time}</TextStyled>
        </TextContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default RestaurantsItem;
