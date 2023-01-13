import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import SearchAddressBar from "../components/SearchAddressBar";
import Restaurants from "../components/Restaurants";
import Categories from "../components/Categories";
import Favorites from "../components/Favorites";

const Container = styled(View, "flex-1 items-center, bg-[#F2F2F2] ");
const HeaderContainer = styled(View, " w-full h-36 px-4 pt-2");
const SearchBarContainer = styled(
  View,
  "bg-[#D4F9F5] w-full h-14 rounded-t-3xl  justify-center items-center"
);
const ContentContainer = styled(
  View,
  "flex-1 w-full bg-white justify-between rounded-t-3xl px-4 py-6"
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <SearchBarContainer>
          <SearchAddressBar />
        </SearchBarContainer>
        <ContentContainer>
          <Restaurants />
          <Categories />
          <Favorites />
        </ContentContainer>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
