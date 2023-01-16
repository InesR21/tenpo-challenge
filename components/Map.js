import { View, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { styled } from "nativewind";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectAddress } from "../features/address/addressSlice";
import AddAddressInfo from "./AddAddressInfo";

const Container = styled(View, "flex flex-col bg-white h-full");

const Map = () => {
  const userAddress = useSelector(selectAddress);
  const mapRef = useRef(null);
  useEffect(() => {
    if (userAddress) {
      mapRef.current.animateToRegion(
        {
          latitude: userAddress.lat,
          longitude: userAddress.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        1000
      );
      mapRef.current.fitToSuppliedMarkers(["adress"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });

      mapRef.current.animateCamera({
        center: {
          latitude: userAddress.lat,
          longitude: userAddress.lng,
        },
      });
    }
  }, [userAddress]);

  return (
    <Container>
      <MapView
        ref={mapRef}
        style={{ width: "100%", height: "30%" }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: userAddress.lat,
          longitude: userAddress.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userAddress && (
          <Marker
            coordinate={{
              latitude: userAddress.lat,
              longitude: userAddress.lng,
            }}
            title={userAddress.address}
            description={userAddress.address}
            identifier="adress"
          >
            <Image
              source={require("../assets/img/ping.png")}
              style={{ resizeMode: "cover" }}
            />
          </Marker>
        )}
      </MapView>
      <View>
        <AddAddressInfo />
      </View>
    </Container>
  );
};

export default Map;
