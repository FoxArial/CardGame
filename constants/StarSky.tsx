import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
const AnimatedG = Animated.createAnimatedComponent(G);
export default function StarSky() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3500,
        useNativeDriver: true,
      })
    ).start();
  }, []);
  const opacity = fadeAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.2, 1],
  });
  const opacityInvert = fadeAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.2, 1, 0.2],
  });
  return (
    <View>
      <Svg width="100%" height="100%" viewBox="0 0 852 393" fill="none">
        <AnimatedG opacity={opacityInvert}>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(61.375 188.172)"
              fill="none"
            />
            <Circle cx="71.0682" cy="197.865" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(524.708 25.3379)"
              fill="none"
            />
            <Circle cx="534.401" cy="35.0311" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(369.617 141.641)"
              fill="none"
            />
            <Circle cx="379.31" cy="151.334" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(703.065 225.008)"
              fill="none"
            />
            <Circle cx="712.759" cy="234.701" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(231.975 356.834)"
              fill="none"
            />
            <Circle cx="241.668" cy="366.527" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(38.1133 114.502)"
              fill="none"
            />
            <Circle cx="47.8065" cy="124.195" r="9.69323" fill="url(#grad1)" />
          </G>
        </AnimatedG>
        <AnimatedG opacity={opacity}>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(569.3 347.146)"
              fill="none"
            />
            <Circle cx="578.993" cy="356.84" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(274.627 137.764)"
              fill="none"
            />
            <Circle cx="284.32" cy="147.457" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(375.436 -17.3262)"
              fill="none"
            />
            <Circle cx="385.129" cy="-7.63295" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(173.815 44.7148)"
              fill="none"
            />
            <Circle cx="183.509" cy="54.4081" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(158.309 250.205)"
              fill="none"
            />
            <Circle cx="168.002" cy="259.898" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(187.386 362.645)"
              fill="none"
            />
            <Circle cx="197.079" cy="372.338" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(751.531 48.5918)"
              fill="none"
            />
            <Circle cx="761.224" cy="58.2851" r="9.69323" fill="url(#grad1)" />
          </G>
          <G>
            <Rect
              width="19.3865"
              height="19.3865"
              transform="translate(834.892 327.754)"
              fill="none"
            />
            <Circle cx="844.585" cy="337.447" r="9.69323" fill="url(#grad1)" />
          </G>
        </AnimatedG>

        <Defs>
          <RadialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="1.56%" stopColor="#FFFFFF" />
            <Stop offset="100%" stopColor="#A55EFF" stopOpacity=".4" />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  );
}
