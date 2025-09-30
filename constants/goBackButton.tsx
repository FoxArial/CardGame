import { LinearGradient } from "expo-linear-gradient";
import { goBack } from "expo-router/build/global-state/routing";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ArrowLeft from "./arrow-left";
import { base_width, colors, fontsSize, stylesConst } from "./constant";
type GoBackButtonProps = { buttonSize: number; isInGame?: boolean };
export default function GoBackButton({
  buttonSize,
  isInGame,
}: GoBackButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const containerSize = RFValue(buttonSize, base_width) * 1.1;
  const operateClick = () => {
    if (!isInGame) return goBack();
    setModalVisible(true);
  };
  const closeModal = () => {
    return setModalVisible(!modalVisible);
  };
  return (
    <View style={[stylesConst.fullScreen, {}]}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Pressable
          onPress={closeModal}
          style={[
            StyleSheet.absoluteFillObject,
            stylesConst.centralPositioning,
            {
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,.5)",
            },
          ]}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            style={{ height: 250, width: "30%" }}
          >
            <LinearGradient
              colors={["#25165F", "#50197D"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.container}
            >
              <View style={{ height: "60%", justifyContent: "center" }}>
                <Text
                  style={[
                    stylesConst.textStyles,
                    { fontSize: fontsSize.mediumSmall },
                  ]}
                >
                  Sure you want to exit?
                </Text>
              </View>
              <View
                style={{
                  height: "40%",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Pressable
                  onPress={() => goBack()}
                  style={[
                    styles.buttonOptions,
                    {
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      stylesConst.textStyles,
                      {
                        fontSize: fontsSize.small,
                        color: colors.SoftRed,
                      },
                    ]}
                  >
                    Yes
                  </Text>
                </Pressable>
                <Pressable onPress={closeModal} style={styles.buttonOptions}>
                  <Text
                    style={[
                      stylesConst.textStyles,
                      { fontSize: fontsSize.small, color: colors.Amethyst },
                    ]}
                  >
                    No
                  </Text>
                </Pressable>
              </View>
            </LinearGradient>
          </Pressable>
        </Pressable>
      </Modal>
      <View
        style={[
          stylesConst.centralPositioning,
          {
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
            position: "absolute",
            left: "5%",
            top: "5%",
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
          onPress={() => operateClick()}
        >
          <View style={styles.arrow}>
            <ArrowLeft />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#12121299",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: { height: "35%", width: "100%" },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.violetDark,
    borderColor: "#543080",
    borderWidth: 2,
    borderRadius: 38,
    paddingTop: 25,
  },
  buttonOptions: {
    width: "50%",
    justifyContent: "center",
    borderColor: "#543080",
    borderTopWidth: 2,
  },
});
