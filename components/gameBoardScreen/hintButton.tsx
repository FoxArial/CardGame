import {
  base_width,
  colors,
  fontsSize,
  stylesConst,
} from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardType } from "./cardBoard";
type HintButtonProps = {
  choiceOne: CardType | null;
  buttonSize: number;
  cardArray: CardType[];
};
export default function HintButton({
  choiceOne,
  cardArray,
  buttonSize,
}: HintButtonProps) {
  const containerSize = RFValue(buttonSize, base_width) * 1.1;
  const blureSize = containerSize * 2;
  const getHint = () => {
    if (choiceOne) {
    }
    console.log("hint");
  };
  return (
    <View
      style={[
        stylesConst.centralPositioning,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          stylesConst.fullScreen,
          {
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
          },
        ]}
        onPress={() => getHint()}
      >
        <LinearGradient
          style={[
            styles.buttonGradient,
            stylesConst.fullScreen,
            {
              borderRadius: containerSize / 2,
            },
          ]}
          colors={[colors.orangeLight, colors.orangeDark]}
          start={{ x: 1, y: -0.3 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text
            style={[
              stylesConst.textStyles,
              { fontSize: fontsSize.mediumSmall },
            ]}
          >
            ?
          </Text>
        </LinearGradient>
      </Pressable>
      <Image
        source={require("../../assets/images/button_blur.png")}
        resizeMode="contain"
        style={[styles.img, { width: blureSize, height: blureSize }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.hintBorder,
    borderWidth: 3,
    zIndex: 2,
  },
  buttonGradient: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    top: "-50%",
  },
});
