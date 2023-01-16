import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { selectAddress } from "../features/address/addressSlice";

const Container = styled(View, "flex-row items-center justify-center px-14");
const TextAddStyled = styled(Text, "text-[#008f7e] text-base ");
const TextDireccion = styled(Text, "text-[#008f7e] text-base ");
const TextDeatilStyled = styled(Text, "text-[#008f7e] text-sm ");
const ImageStyled = styled(Image, "w-6 h-6 mr-4");
const TextContainer = styled(View, "flex-col");

const SearchAddressBar = () => {
  const userAddress = useSelector(selectAddress);
  const address = userAddress?.address;

  return (
    <Container>
      <ImageStyled
        resizeMode="contain"
        source={require("./../assets/img/header/gps.png")}
      />
      <TextContainer>
        {address ? (
          <TextDeatilStyled>Enviaremos tus pedidos a </TextDeatilStyled>
        ) : (
          <TextAddStyled>Agregar dirección de entrega</TextAddStyled>
        )}

        {address && <TextDireccion numberOfLines={1}>{address}</TextDireccion>}
      </TextContainer>
    </Container>
  );
};

export default SearchAddressBar;
