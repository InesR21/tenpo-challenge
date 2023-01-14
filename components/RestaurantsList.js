import { View, Text, FlatList } from "react-native";
import React from "react";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsItem from "./RestaurantsItem";
import { styled } from "nativewind";

const Container = styled(View, " w-full space-y-2 pl-4 ");
const Title = styled(Text, "font-bold text-lg");

const RestaurantsList = () => {
  const { restaurantsList } = useRestaurants();

  return (
    <Container>
      <Title>RESTAURANTES</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurantsList}
        renderItem={({ item }) => <RestaurantsItem restaurant={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default RestaurantsList;
