import { colors, width } from "@/constants/constant";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import { CardType } from "./cardBoard";
type SingleCardProps = {
  card: CardType;
  handleChoice: (card: CardType) => void;
  disabled: boolean;
  flipped: boolean;
  invisibility: boolean;
};
const cardCover = require("@/assets/images/card-off.png");
export default function SingleCard({
  card,
  handleChoice,
  disabled,
  flipped,
  invisibility,
}: SingleCardProps) {
  const size = width * 0.12;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (!invisibility) {
      Animated.spring(rotateAnim, {
        toValue: flipped ? 180 : 0,
        useNativeDriver: true,
        friction: 8,
        tension: 10,
      }).start();
    }
  }, [flipped, invisibility]);
  useEffect(() => {
    if (invisibility) {
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1500,
      }).start();
    }
  }, [invisibility]);
  const frontInterpolate = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
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
              styles.cardContainer,
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
                    borderColor: colors.cardBorderSelected,
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
                    borderColor: colors.cardBorder,
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
  cardContainer: {
    width: "100%",
    height: "100%",
  },
  card: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",

    borderRadius: 15,
  },
});
