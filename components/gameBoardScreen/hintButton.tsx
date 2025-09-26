import {
  base_width,
  colors,
  fontsSize,
  stylesConst,
} from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardType } from "./cardBoard";
type HintButtonProps = {
  choiceOne: CardType | null;
  buttonSize: number;
  cardArray: CardType[];
  setHintedCards: (ids: number[]) => void;
};
export default function HintButton({
  choiceOne,
  cardArray,
  buttonSize,
  setHintedCards,
}: HintButtonProps) {
  const [disabled, setDisabled] = useState(false);
  const containerSize = RFValue(buttonSize, base_width) * 1.1;
  const blureSize = containerSize * 2;
  const getHint = () => {
    if (disabled) return;
    setDisabled(true);
    if (!choiceOne || choiceOne === null) {
      const sortedArr: CardType[] = cardArray.filter((c) => !c.matched);
      const randomFirst = sortedArr[0];

      const pair = cardArray.find(
        (card) => card.src === randomFirst.src && card.id !== randomFirst.id
      );
      if (pair) {
        setDisabled(false);
        setHintedCards([randomFirst.id, pair.id]);
      }
    } else {
      const pairCard = cardArray.find(
        (card) => card.src === choiceOne.src && card.id !== choiceOne.id
      );
      if (pairCard) {
        setDisabled(false);
        setHintedCards([choiceOne!.id, pairCard.id]);
      }
    }
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
