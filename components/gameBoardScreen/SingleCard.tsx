import { colors, width } from "@/constants/constant";
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
type SingleCardProps = {
  card: { id: number; src: ImageSourcePropType };
};
const cardCover = require("@/assets/images/card-off.png");
export default function SingleCard({ card }: SingleCardProps) {
  const [isCardSelected, setCardSelected] = useState(false);
  const size = width * 0.12;
  return (
    <View style={styles.cardWrapper}>
      <View style={{ width: size, height: size }}>
        <Pressable onPress={() => setCardSelected((e) => !e)}>
          {({ pressed }) => (
            <View
              style={[
                styles.cardContainer,
                {
                  borderColor: pressed
                    ? colors.cardBorderSelected
                    : colors.cardBorder,
                },
              ]}
            >
              {isCardSelected ? (
                <Image style={styles.card} source={card.src} />
              ) : (
                <Image
                  style={[styles.card, { transform: [{ scale: 1.1 }] }]}
                  source={cardCover}
                />
              )}
            </View>
          )}
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
    borderRadius: 10,
    borderWidth: 3,
    overflow: "hidden",
  },
  card: {
    width: "101%",
    height: "101%",
  },
});
