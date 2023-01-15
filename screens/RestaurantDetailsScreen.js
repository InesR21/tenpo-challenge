import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const RestaurantDetailsScreen = () => {
  const { discount, img, name, score, time } = useRoute()?.params?.restaurant;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default RestaurantDetailsScreen;
