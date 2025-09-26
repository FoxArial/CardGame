import { colors, stylesConst, width } from "@/constants/constant";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import { CardType } from "./cardBoard";
type SingleCardProps = {
  card: CardType;
  handleChoice: (card: CardType) => void;
  disabled: boolean;
  flipped: boolean;
  invisibility: boolean;
  hinted: boolean;
};
const cardCover = require("@/assets/images/card-off.png");
export default function SingleCard({
  card,
  handleChoice,
  disabled,
  flipped,
  invisibility,
  hinted,
}: SingleCardProps) {
  const size = width * 0.12;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const colorChangeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!invisibility) {
      Animated.spring(rotateAnim, {
        toValue: flipped ? 180 : 0,
        useNativeDriver: false,
        friction: 8,
        tension: 10,
      }).start();
    }
  }, [flipped, invisibility]);

  useEffect(() => {
    if (invisibility) {
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1500,
      }).start();
    }
  }, [invisibility]);

  useEffect(() => {
    Animated.timing(colorChangeAnim, {
      toValue: hinted ? 1 : 0,
      useNativeDriver: false,
      duration: 750,
    }).start();
  }, [hinted]);

  const frontInterpolate = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });
  const colorBorderInterpolate = colorChangeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.cardBorder, colors.cardBorderHint],
  });
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };
  return (
    <View style={styles.cardWrapper}>
      <View style={{ width: size, height: size }}>
        <Pressable onPress={handleClick}>
          <Animated.View
            style={[
              stylesConst.fullScreen,
              {
                opacity: opacityAnim,
              },
            ]}
          >
            {flipped || invisibility ? (
              <Animated.View
                style={[
                  styles.card,
                  {
                    transform: [{ rotateY: backInterpolate }],
                    borderColor: colors.Amethyst,
                  },
                ]}
              >
                <Image
                  source={require("@/assets/images/purple-outline.png")}
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: 3,
                    transform: [{ scale: 1.2 }],
                  }}
                />
                <Image style={[styles.image, {}]} source={card.src} />
              </Animated.View>
            ) : (
              <Animated.View
                style={[
                  styles.card,
                  {
                    transform: [{ rotateY: frontInterpolate }],
                    position: "absolute",
                    borderColor: colorBorderInterpolate,
                    borderWidth: 5,
                    overflow: "hidden",
                    borderRadius: 15,
                  },
                ]}
              >
                <Image
                  style={[styles.image, { transform: [{ scale: 1.08 }] }]}
                  source={cardCover}
                />
              </Animated.View>
            )}
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardWrapper: {
    margin: 5,
  },
  card: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
