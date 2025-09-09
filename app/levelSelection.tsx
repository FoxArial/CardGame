import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function levelSelection() {
  return (
    <View>
      <Text>levelSelection</Text>
      <Link href={{ pathname: "/gameBoardScreen", params: { cardCount: 3 } }}>
        <View className="card"></View>
      </Link>
    </View>
  );
}
