import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export const { width, height } = Dimensions.get("window");
export const colors = {
  background: "#16103E",
  text: "#FAFAFA",
  secondary: "#5F81EE",
  levelBorder: "#4B299A",
  levelBorderSelected: "#EDBB57",
  cardBorder: "#577DED",
  cardBorderHint: "#E88F40",
  Amethyst: "#C57CFF",
  hintBorder: "#FFE57C",
  violetDark: "#7500D1",
  violetLight: "#C780FF",
  orangeDark: "#D16C00",
  orangeLight: "#FFB380",
  blueLight: "#C7E4FF",
  blueDark: "#587CFF",
  yellow: "#FFC965",
  SoftRed: "#E96666",
};
export const fonts = {
  medium: "Fredoka-Medium",
  semiBold: "Fredoka-SemiBold",
};
export const base_width = 852;
export const fontsSize = {
  title: RFValue(48, base_width),
  medium: RFValue(40, base_width),
  mediumSmall: RFValue(20, base_width),
  small: RFValue(16, base_width),
};

export const stylesConst = StyleSheet.create({
  textStyles: {
    fontFamily: fonts.semiBold,
    fontWeight: 600,
    margin: 0,
    color: colors.text,
    textAlign: "center",
  },
  bg: {
    height: height,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreen: {
    height: "100%",
    width: "100%",
  },
  centralPositioning: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenCentralElement: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const hexToRgba = (hex: string, opacity: number) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${opacity})`;
};
//backgroundColor: "#1ffd71a0"
