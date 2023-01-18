import { View, Text, FlatList } from "react-native";
import React from "react";
import { favorites } from "../config/globalData";
import FavoriteItem from "./FavoriteItem";
import { styled } from "nativewind";
import { fontStyles } from "../utils/FontFamilys";

const Container = styled(View, " w-full pl-4 ");
const Title = styled(Text, "font-bold text-lg");

const FavoritesList = () => {
  return (
    <Container>
      <Title style={fontStyles.GothamBold}>TUS FAVORITOS</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={favorites}
        renderItem={({ item }) => <FavoriteItem favorite={item} />}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};

export default FavoritesList;
