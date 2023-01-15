import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>MapScreen</Text>

      <Text onPress={() => navigation.navigate("Home")}>Go to Home</Text>
    </SafeAreaView>
  );
};

export default MapScreen;
