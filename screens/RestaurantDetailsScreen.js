import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { styled } from "nativewind";

const Container = styled(View, "bg-white w-full h-full items-center ");
const TextTitle = styled(Text, "text-xl font-bold mt-5");
const TextDescription = styled(Text, "text-[#adadad] text-xs");
const TextDetails = styled(Text, "text-[#adadad] text-xl mt-60");
const ImageStyle = styled(Image, "w-36 h-36 mt-10 rounded-lg");

const RestaurantDetailsScreen = () => {
  const { img, name, category } = useRoute()?.params?.restaurant;

  return (
    <SafeAreaView>
      <Container>
        <ImageStyle source={img} />
        <TextTitle>{name}</TextTitle>
        <TextDescription>{category}</TextDescription>
        <TextDetails>Detalle de restaurante</TextDetails>
      </Container>
    </SafeAreaView>
  );
};

export default RestaurantDetailsScreen;
