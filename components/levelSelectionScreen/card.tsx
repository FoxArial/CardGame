import { colors, fontsSize, stylesConst, width } from "@/constants/constant";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
type CardProps = {
  level: number;
  text: string;
};
const size = width * 0.2;
const miniCardSize = size * 0.4;
export default function Card({ level, text }: CardProps) {
  const router = useRouter();
  return (
    <View style={[stylesConst.textStyles, styles.content]}>
      <Pressable
        style={styles.cardContainer}
        onPress={() => {
          setTimeout(() => {
            router.push({ pathname: "/gameBoardScreen", params: { level: 3 } });
          }, 150);
        }}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.card,
              {
                borderColor: pressed
                  ? colors.levelBorderSelected
                  : colors.levelBorder,
              },
            ]}
          >
            <Image
              source={require("../../assets/images/solar-effect-level-selection.png")}
              resizeMode="cover"
              style={styles.solarImg}
            />
            <View
              style={{
                width: "40%",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={[
                  stylesConst.textStyles,
                  {
                    fontSize: fontsSize.medium,
                    paddingRight: "10%",
                  },
                ]}
              >
                {level}
              </Text>
            </View>
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../../assets/images/card-off.png")}
                resizeMode="contain"
                style={styles.cardImage}
              />
            </View>
          </View>
        )}
      </Pressable>
      <View
        style={{
          justifyContent: "center",
          height: "20%",
        }}
      >
        <Text style={[stylesConst.textStyles, { fontSize: fontsSize.small }]}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: size,
    width: size,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    height: "75%",
    width: "80%",
    borderRadius: 45,
  },
  card: {
    backgroundColor: colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "relative",
    borderRadius: 45,
    borderWidth: 5,
  },
  solarImg: {
    position: "absolute",
    width: "120%",
    height: "120%",
    top: "-12%",
    left: "-10%",
  },
  cardImageContainer: {
    height: miniCardSize,
    width: miniCardSize,
  },
  cardImage: {
    height: "100%",
    width: "100%",
    borderWidth: 4,
    borderColor: colors.levelBorderSelected,
    borderRadius: 10,
  },
});
