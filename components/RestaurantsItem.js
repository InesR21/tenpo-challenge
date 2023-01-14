import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";

const Container = styled(
  View,
  " py-2 mb-6  px-2 justify-center relative  items-center rounded-xl "
);
const ImageStyled = styled(Image, "w-28 h-28 mb-2 rounded-xl");
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

  return (
    <TouchableOpacity>
      <Container>
        <ViewDiscount>
          <TextDiscount>{restaurant.discount}</TextDiscount>
        </ViewDiscount>
        <ImageStyled source={restaurant.img} />
        <TextStyled>{restaurant.name}</TextStyled>
        <TextContainer>
          <ViewScoreStyled>
            <ImageStart source={require("./../assets/img/star.png")} />
            <TextStyled>{restaurant.score}</TextStyled>
          </ViewScoreStyled>
          <TextStyled>{restaurant.time}</TextStyled>
        </TextContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default RestaurantsItem;
