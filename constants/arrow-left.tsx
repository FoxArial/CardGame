import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function ArrowLeft() {
  return (
    <View>
      <Svg width="100%" height="100%" viewBox="0 0 10 18" fill="none">
        <Path
          d="M8.49995 2C8.49995 2 1.50002 7.15542 1.5 9.00005C1.49998 10.8447 8.5 16 8.5 16"
          stroke="#FAFAFA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
