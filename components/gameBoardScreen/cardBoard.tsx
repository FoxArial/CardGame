import { LevelContext } from "@/app/gameBoardScreen";
import React, { useContext, useEffect, useState } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: require("@/assets/images/girl-1.png") },
  { src: require("@/assets/images/girl-2.png") },
  { src: require("@/assets/images/girl-3.png") },
  { src: require("@/assets/images/girl-4.png") },
  { src: require("@/assets/images/girl-5.png") },
  { src: require("@/assets/images/girl-6.png") },
];

export default function CardBoard() {
  const [cards, setCards] = useState<
    { id: number; src: ImageSourcePropType }[]
  >([]);

  const cardNumber = useContext(LevelContext);
  useEffect(() => {
    shuffleCards();
  }, [cardNumber]);
  const selectedCardNumbers = cardImages
    .sort(() => Math.random() - 0.5)
    .slice(0, cardNumber);

  const shuffleCards = () => {
    const ShuffledCardImages = [...selectedCardNumbers, ...selectedCardNumbers]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(ShuffledCardImages);
  };
  return (
    <View>
      <Text>CardBoard {cardNumber}</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
});
