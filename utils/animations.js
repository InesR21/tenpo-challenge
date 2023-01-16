import { Animated } from "react-native";

export const animatedCrossFadeIn = (fadeAnim) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();
};
