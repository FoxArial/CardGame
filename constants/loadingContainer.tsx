import React from "react";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

export default function LoadingContainer() {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 420 53" fill="none">
      <Rect
        x="1"
        y="1"
        height="100%"
        width="100%"
        rx="19"
        fill="black"
        fillOpacity="0.8"
      />
      <Rect
        x="1"
        y="1"
        width="100%"
        height="100%"
        rx="19"
        fill="url(#paint0_linear_63_75390)"
        fillOpacity="0.3"
      />
      <Rect
        x="1"
        y="1"
        width="100%"
        height="100%"
        rx="19"
        stroke="url(#paint1_linear_63_75390)"
        strokeWidth="2"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_63_75390"
          x1="420"
          y1="26.5"
          x2="-1.45546e-07"
          y2="26.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C780FF" />
          <Stop offset="1" stopColor="#7500D1" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_63_75390"
          x1="420"
          y1="26.5"
          x2="-1.45546e-07"
          y2="26.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C780FF" />
          <Stop offset="1" stopColor="#7500D1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
