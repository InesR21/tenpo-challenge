import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const Container = styled(View, "flex flex-col bg-white h-full my-4 p-4");
const Title = styled(Text, "text-lg font-bold");
const SubTitle = styled(Text, "text-base text-gray-400");
const Address = styled(
  TextInput,
  "text-base border border-gray-300 rounded-2xl p-2 h-36 my-4"
);
const Button = styled(
  TouchableOpacity,
  "bg-[#00baa4] rounded-lg p-4 w-[95%] self-center mt-8"
);
const TextButton = styled(
  Text,
  "text-white text-base text-center font-bold uppercase"
);

const MapsAddAddressInfo = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Agregar información de entrega</Title>
      <SubTitle>Depto, Oficina, Piso, Block,</SubTitle>
      <Address multiline={true} numberOfLines={4} />
      <Button onPress={() => navigation.navigate("Home")}>
        <TextButton>agregar direción</TextButton>
      </Button>
    </Container>
  );
};

export default MapsAddAddressInfo;
