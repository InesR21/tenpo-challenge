import { Animated } from "react-native";

export const animatedCrossFadeIn = (fadeAnim) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();
};

export const animatedimgFadeIn = (fadeAnim, x, y) => {
  Animated.spring(fadeAnim, {
    toValue: { x: x, y: y },
    duration: 1000,
    useNativeDriver: false,
  }).start();
};
