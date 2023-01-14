import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";

const Container = styled(
  View,
  "justify-center relative items-center w-64 py-4 mr-4  mb-4 "
);
const ViewContent = styled(
  View,
  "flex-row justify-around bg-white pb-2 shadow-sm w-full rounded-b-2xl w-[247px]"
);
const ImageStyled = styled(Image, "w-64 h-24 ");
const ViewScoreStyled = styled(View, "flex-row justify-center items-center ");

const ImageStart = styled(Image, "w-2 h-2 mr-1");
const TextStyled = styled(Text, "text-[10px]");

const ViewLogo = styled(
  View,
  "absolute top-6 left-4 z-10 items-center justify-center"
);
const ImageLogoStyled = styled(Image, "w-9 h-9");

const FavoriteItem = ({ favorite = {} }) => {
  return (
    <Container>
      <ViewLogo>
        <ImageLogoStyled source={favorite.logo} />
      </ViewLogo>
      <ImageStyled source={favorite.img} />
      <ViewContent>
        <View>
          <TextStyled>{favorite.description}</TextStyled>
          <TextStyled style={{ color: "#00BAA4", fontWeight: "600" }}>
            {favorite.name}
          </TextStyled>
        </View>
        <View>
          <ViewScoreStyled>
            <ImageStart source={require("./../assets/img/star.png")} />
            <TextStyled>{favorite.score}</TextStyled>
          </ViewScoreStyled>
          <TextStyled>{favorite.time}</TextStyled>
        </View>
      </ViewContent>
    </Container>
  );
};

export default FavoriteItem;
