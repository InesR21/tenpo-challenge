import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import SearchAddressBar from "../components/SearchAddressBar";
import RestaurantsList from "../components/RestaurantsList";
import CategoriesList from "../components/CategoriesList";
import FavoritesList from "../components/FavoritesList";
import { useNavigation } from "@react-navigation/native";

const Container = styled(View, "flex-1 items-center, bg-[#F2F2F2] ");
const HeaderContainer = styled(View, " w-full h-52 px-4 pt-2");
const SearchBarContainer = styled(
  TouchableOpacity,
  "bg-[#D4F9F5] w-full h-14 rounded-t-3xl  justify-center items-center"
);
const ContentContainer = styled(
  View,
  "flex-1 w-full bg-white justify-between rounded-t-3xl  py-6"
);

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <SearchBarContainer onPress={() => navigation.navigate("Maps")}>
            <SearchAddressBar />
          </SearchBarContainer>
          <ContentContainer>
            <RestaurantsList />
            <CategoriesList />
            <FavoritesList />
          </ContentContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
