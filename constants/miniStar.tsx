import React from "react";
import { View } from "react-native";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

export default function MiniStar() {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Circle
          cx="10.0018"
          cy="9.8983"
          r="9.69323"
          fill="url(#paint0_radial_4012_28020)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_4012_28020"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.0018 9.8983) rotate(90) scale(9.69323)"
          >
            <Stop offset="0.015625" stop-color="white" />
            <Stop offset="1" stop-color="#A55EFF" stop-opacity="0" />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  );
}
