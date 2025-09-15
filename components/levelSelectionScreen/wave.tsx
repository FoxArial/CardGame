import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function Wave() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Svg viewBox="0 0 853 194" fill="none">
        <Path
          opacity="0.5"
          d="M853 30C713.311 -17.1351 616.201 -1.10901 426.564 30C263.413 64.8599 169.725 84.0196 0.128906 62V169H853V30Z"
          fill="url(#paint0_linear_64_89912)"
        />
        <Path
          opacity="0.5"
          d="M0.128906 65C169.725 87.0196 263.413 67.8599 426.564 33C616.201 1.89099 713.311 -14.1352 853 33V30C713.311 -17.1352 616.201 -1.10901 426.564 30C263.413 64.8599 169.725 84.0196 0.128906 62V65ZM853 169H0.128906V194H853V169Z"
          fill="url(#paint1_linear_64_89912)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_64_89912"
            x1="213.708"
            y1="0.356908"
            x2="211.028"
            y2="168.963"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#A12FFF" />
            <Stop offset="0.0865385" stopColor="#7D22F1" />
            <Stop offset="0.51439" stopColor="#7D22F1" stopOpacity="0.9" />
            <Stop offset="1" stopColor="#7D22F1" stopOpacity="0" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_64_89912"
            x1="213.708"
            y1="48.1871"
            x2="211.826"
            y2="189.493"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7D22F1" />
            <Stop offset="0.51439" stopColor="#7D22F1" stopOpacity="0.9" />
            <Stop offset="1" stopColor="#7D22F1" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}
