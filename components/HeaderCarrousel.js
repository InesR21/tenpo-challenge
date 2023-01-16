import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "nativewind";
import { headerCarousel } from "./../config/globalData";
import HeaderTabs from "./HeaderTabs";
import HeaderCross from "./HeaderCross";
import { animatedimgFadeIn } from "../utils/animations";
const { width } = Dimensions.get("window");

const Container = styled(View, "h-40");
const ContainerCarrousel = styled(
  View,
  "flex-row justify-between mr-4 w-[396px] pb-2 "
);
const ContainerText = styled(View, "pt-7 basis-2/4 h-40");
const TextTitle = styled(Text, "text-4xl font-bold color-[#333]");
const TextSubtitle = styled(Text, "text-4xl font-bold color-[#00baa4]");
const TextDescription = styled(Text, "text-sm font-bold color-[#333333]");
const ImageContainer = styled(
  View,
  "flex-row basis-2/4 h-40 justify-center items-center"
);
const ImageHand = styled(Image, "z-10 w-34 h-36 absolute right-5 bottom-0 ");
const ContainerImageMotorcycle = styled(
  Animated.View,
  "w-20 h-24 absolute right-14 top-2"
);
const ImageMotorcycle = styled(Animated.Image, "w-24 h-28");

const HeaderCarrousel = () => {
  const [slideActive, setSlideActive] = useState(1);
  const onScroll = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== slideActive && slide !== 0) {
      setSlideActive(slide);
    }
  };
  const imgAnimated = useRef(new Animated.ValueXY({ x: 60, y: 10 })).current;

  useEffect(() => {
    animatedimgFadeIn(imgAnimated, 10, 30);
  }, []);

  return (
    <Container>
      <HeaderCross />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={({ nativeEvent }) => onScroll(nativeEvent)}
        data={headerCarousel}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContainerCarrousel>
            <ContainerText>
              <TextTitle>{item.title}</TextTitle>
              <TextSubtitle>{item.subtitle}</TextSubtitle>
              <TextDescription>{item.description}</TextDescription>
            </ContainerText>
            <ImageContainer>
              <ImageHand
                resizeMode="contain"
                source={require("./../assets/img/header/hand.png")}
              />
              <ContainerImageMotorcycle style={imgAnimated.getLayout()}>
                <ImageMotorcycle
                  source={require("./../assets/img/header/motorcycle.png")}
                />
              </ContainerImageMotorcycle>
            </ImageContainer>
          </ContainerCarrousel>
        )}
      />
      <HeaderTabs data={headerCarousel} indexSlideActive={slideActive} />
    </Container>
  );
};

export default HeaderCarrousel;
