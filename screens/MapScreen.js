import { View, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setAddress } from "../features/address/addressSlice";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapsHeader from "../components/MapsHeader";
import MapsWaiting from "../components/MapsWaiting";

const MapScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView styles={{ position: "relative" }}>
      <MapsHeader />
      <GooglePlacesAutocomplete
        placeholder="Escribe tu dirección"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails={true}
        enablePoweredByContainer={false}
        returnKeyType={"search"}
        styles={{
          textInput: {
            fontSize: 18,
            fontFamily: "GothamBook",
            borderRadius: 30,
            backgroundColor: "white",
            height: 50,
            paddingLeft: 20,
            paddingRight: 20,
            color: "#008f7e",
            zIndex: 10,
            borderWidth: 1,
            borderColor: "#dddddd",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 3,
          },
          container: {
            flex: 0,
            position: "absolute",
            top: 150,
            width: "100%",
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setAddress({
              address: data.description,
              lat: details.geometry.location.lat,
              lng: details.geometry.location.lng,
            })
          );
          navigation.navigate("Map");
        }}
        query={{
          key: process.env.EXPO_GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
      />

      <View style={{ width: "100%", height: "100%", zIndex: -1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WaitingLocation" component={MapsWaiting} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
