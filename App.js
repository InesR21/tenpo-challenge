import { StyleSheet } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Maps"
            component={MapScreen}
            options={{
              headerShown: false,
              animation: "slide_from_bottom",
              animationDuration: 800,
            }}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
