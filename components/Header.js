import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import HeaderCarrousel from "./HeaderCarrousel";

const Container = styled(View, "flex-row justify-between items-center");
const ImagePerfil = styled(Image, "w-10 h-10 rounded-full");
const ImageSearch = styled(Image, "w-6 h-6");

const Header = () => {
  return (
    <>
      <Container>
        <ImagePerfil source={require("./../assets/img/header/perfil.png")} />
        <ImageSearch source={require("./../assets/img/Icon-search.png")} />
      </Container>
      <HeaderCarrousel />
    </>
  );
};

export default Header;
