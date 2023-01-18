import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styled } from "nativewind";
import SearchAddressBar from "../components/SearchAddressBar";
import Constants from "expo-constants";
import { fontStyles } from "../utils/FontFamilys";

const ContainerHeader = styled(
  View,
  "bg-[#D4F9F5] h-44 w-full justify-around flex-row items-center px-4"
);

const ContainerContent = styled(
  View,
  "bg-white w-full h-full items-center rounded-t-3xl z-10 -mt-6 boder-2 border-gray-200 shadow-xl elevation-10 "
);
const TextTitle = styled(Text, "text-xl font-bold mt-5");
const TextDescription = styled(Text, "text-[#adadad] text-xs");
const TextDetails = styled(Text, "text-[#adadad] text-xl mt-60");
const ImageStyle = styled(Image, "w-36 h-36 mt-10 rounded-lg");

const RestaurantDetailsScreen = () => {
  const { img, name, category } = useRoute()?.params?.restaurant;
  const navigation = useNavigation();

  return (
    <>
      <ContainerHeader style={{ paddingTop: Constants.statusBarHeight }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("./../assets/img/back.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <SearchAddressBar
          detail={"Tu ubicación cercana"}
          showIcon={false}
          bold
        />
        <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
          <Image
            source={require("./../assets/img/Icon-search.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </ContainerHeader>
      <ContainerContent>
        <ImageStyle source={img} />
        <TextTitle style={fontStyles.GothamBold}>{name}</TextTitle>
        <TextDescription style={fontStyles.GothamBook}>
          {category}
        </TextDescription>
        <TextDetails style={fontStyles.GothamBook}>
          Detalle de restaurante
        </TextDetails>
      </ContainerContent>
    </>
  );
};

export default RestaurantDetailsScreen;
