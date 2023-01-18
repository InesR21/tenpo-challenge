import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    GothamBold: require("./assets/fonts/Gotham-Bold.otf"),
    GothamBook: require("./assets/fonts/Gotham-Book.otf"),
    GothamLight: require("./assets/fonts/Gotham-Light.otf"),
    GothamMedium: require("./assets/fonts/Gotham-Medium.otf"),
    GothamUltra: require("./assets/fonts/Gotham-Ultra.otf"),
  });

  async function hideSplashScreen() {
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Maps"
            component={MapScreen}
            options={{
              animation: "slide_from_bottom",
              animationDuration: 800,
            }}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetailsScreen}
            options={{
              animation: "slide_from_bottom",
              animationDuration: 800,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
