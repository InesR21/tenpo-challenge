import { View, Text, FlatList } from "react-native";
import React from "react";
import { categories } from "../config/globalData";
import CategoriesItem from "./CategoriesItem";
import { styled } from "nativewind";

const Container = styled(View, " w-full space-y-2 pl-4 ");
const Title = styled(Text, "font-bold text-lg");

const CategoriesList = () => {
  return (
    <Container>
      <Title>CATEGORÍAS</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CategoriesItem categorie={item} />}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};

export default CategoriesList;
