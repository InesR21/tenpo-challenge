import { Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { styled } from "nativewind";
import { animatedCrossFadeIn } from "../utils/animations";

const ImageCrossRigh1 = styled(
  Animated.Image,
  "absolute top-0 right-4 w-3 h-3 rotate-12"
);
const ImageCrossRigh2 = styled(
  Animated.Image,
  "absolute top-9 right-1 w-3 h-3 rotate-12"
);

const ImageCrossLeft1 = styled(
  Animated.Image,
  "absolute top-[-20] right-28 w-3 h-3 "
);

const ImageCrossLeft2 = styled(
  Animated.Image,
  "absolute top-2 right-36 w-3 h-3 -rotate-[20deg]"
);

const HeaderCross = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedCrossFadeIn(fadeAnim);
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <ImageCrossRigh1 source={require("../assets/img/header/cross.png")} />
      <ImageCrossRigh2 source={require("../assets/img/header/cross.png")} />
      <ImageCrossLeft1 source={require("../assets/img/header/cross.png")} />
      <ImageCrossLeft2 source={require("../assets/img/header/cross.png")} />
    </Animated.View>
  );
};

export default HeaderCross;
