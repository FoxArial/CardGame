import React from "react";
import { View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  RadialGradient,
  Stop,
} from "react-native-svg";

export default function BgWaveSecondType() {
  return (
    <View>
      <Svg width="100%" height="100%" fill="none">
        <Path
          d="M426 1.50001C703.594 1.50002 954.951 24.8866 1136.95 62.7158C1227.93 81.6279 1301.66 104.166 1352.68 129.238C1378.19 141.773 1398.1 154.979 1411.65 168.744C1425.21 182.514 1432.5 196.951 1432.5 211.897C1432.5 226.842 1425.21 241.278 1411.65 255.048C1398.1 268.813 1378.19 282.019 1352.68 294.554C1301.66 319.626 1227.93 342.164 1136.95 361.076C954.951 398.905 703.594 422.292 426 422.292C148.406 422.292 -102.951 398.905 -284.947 361.076C-375.933 342.164 -449.664 319.626 -500.684 294.554C-526.191 282.019 -546.1 268.813 -559.651 255.048C-573.207 241.278 -580.5 226.842 -580.5 211.896C-580.5 196.951 -573.207 182.514 -559.651 168.744C-546.1 154.979 -526.191 141.773 -500.684 129.238C-449.664 104.166 -375.933 81.6279 -284.947 62.7158C-102.951 24.8866 148.406 1.50001 426 1.50001Z"
          fill="url(#paint0_linear_64_76717)"
          fillOpacity="0.7"
          stroke="url(#paint1_radial_64_76717)"
          strokeWidth="3"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_64_76717"
            x1="435.995"
            y1="0.00148525"
            x2="435.995"
            y2="420.792"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1A1053" />
            <Stop offset="1" stopColor="#240930" />
          </LinearGradient>
          <RadialGradient
            id="paint1_radial_64_76717"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(436 9.50003) rotate(-180) scale(436 1175.08)"
          >
            <Stop offset="0.21116" stopColor="#C57CFF" />
            <Stop offset="0.999414" stopColor="#C57CFF" stopOpacity="0.1" />
          </RadialGradient>
        </Defs>
      </Svg>
    </View>
  );
}
