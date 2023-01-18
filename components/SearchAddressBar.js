import { View, Text, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { useSelector } from "react-redux";
import { selectAddress } from "../features/address/addressSlice";
import { fontStyles } from "../utils/FontFamilys";

const Container = styled(View, "flex-row items-center px-14");
const TextAddStyled = styled(Text, "text-[#008f7e] text-base ");
const TextDireccion = styled(Text, "text-[#008f7e] text-base ");
const TextDetailStyled = styled(Text, "text-[#008f7e] text-sm ");
const ImageStyled = styled(Image, "w-6 h-6 mr-4");
const TextContainer = styled(View, "flex-col");

const SearchAddressBar = ({ detail, showIcon, bold }) => {
  const userAddress = useSelector(selectAddress);
  const address = userAddress?.address;

  return (
    <Container>
      {showIcon ? (
        <ImageStyled
          resizeMode="contain"
          source={require("./../assets/img/header/gps.png")}
        />
      ) : null}
      <TextContainer>
        {address ? (
          <TextDetailStyled
            style={[
              {
                fontWeight: bold ? "bold" : "normal",
              },
              bold ? null : fontStyles.GothamLight,
            ]}
          >
            {detail}{" "}
          </TextDetailStyled>
        ) : (
          <TextAddStyled style={fontStyles.GothamLight}>
            Agregar dirección de entrega
          </TextAddStyled>
        )}

        {address && (
          <TextDireccion style={fontStyles.GothamLight} numberOfLines={1}>
            {address}
          </TextDireccion>
        )}
      </TextContainer>
    </Container>
  );
};

export default SearchAddressBar;
