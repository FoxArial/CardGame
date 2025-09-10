import { Dimensions, StyleSheet } from "react-native";
export const { width, height } = Dimensions.get("window");
export const colors = {
  background: "#16103E",
  text: "#FAFAFA",
  secondary: "#5F81EE",
  levelBorder: "#4B299A",
  levelBorderSelected: "#EDBB57",
  cardBorder: "#577DED",
  cardBorderHint: "#E88F40",
  cardBorderSelected: "#C57CFF",
  hintBorder: "#FFE57C",
  darkViolet: "#7500D1",
  lightViole: "#C780FF",
  darkOrange: "#D16C00",
  lightOrange: "#FFB380",
};

export const fonts = {
  medium: "Fredoka-Medium",
  semiBold: "Fredoka-SemiBold",
};

export const stylesConst = StyleSheet.create({
  textStyles: {
    fontFamily: fonts.semiBold,
    fontWeight: 600,
    margin: 0,
    color: colors.text,
  },
});
