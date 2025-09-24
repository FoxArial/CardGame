import { base_width, colors, stylesConst } from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import { RelativePathString, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PlayButton from "./playButton";

type ButtonProps = {
  nav: RelativePathString;
  playButtonSize: number;
};
export default function Button({ nav, playButtonSize }: ButtonProps) {
  const router = useRouter();
  const containerSize = RFValue(playButtonSize, base_width) * 1.1;
  const blureSize = containerSize * 2;
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
        onPress={() => router.push(nav)}
      >
        <LinearGradient
          style={[
            styles.buttonGradient,
            stylesConst.fullScreen,
            {
              borderRadius: containerSize / 2,
            },
          ]}
          colors={[colors.violetLight, colors.violetDark]}
          start={{ x: 1, y: -0.3 }}
          end={{ x: 1, y: 0.5 }}
        >
          <PlayButton size={playButtonSize * 0.5} stroke="#FAFAFA" />
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
    borderColor: colors.violetLight,
    borderWidth: 10,
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
