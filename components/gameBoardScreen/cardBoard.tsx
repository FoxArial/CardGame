import { LevelContext } from "@/app/gameBoardScreen";
import React, { useContext, useEffect, useState } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: require("@/assets/images/girl-1.png"), matched: false },
  { src: require("@/assets/images/girl-2.png"), matched: false },
  { src: require("@/assets/images/girl-3.png"), matched: false },
  { src: require("@/assets/images/girl-4.png"), matched: false },
  { src: require("@/assets/images/girl-5.png"), matched: false },
  { src: require("@/assets/images/girl-6.png"), matched: false },
];
export type CardType = {
  id: number;
  src: ImageSourcePropType;
  matched: boolean;
};
export default function CardBoard() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);
  const cardNumber = useContext(LevelContext) / 2;
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

  const handleChoice = (card: CardType) => {
    if (disabled) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };
  const updCardValue = (prevCardValue: CardType[]) => {
    return prevCardValue.map((card) => {
      if (card.src === choiceOne?.src) {
        return { ...card, matched: true };
      }
      return card;
    });
  };
  useEffect(() => {
    if (!choiceOne || !choiceTwo) return;
    setDisabled(true);
    if (choiceTwo.id === choiceOne.id) {
      setChoiceTwo(null);
      setDisabled(false);
      return;
    }
    if (choiceOne.src === choiceTwo.src) {
      setCards((prev) => updCardValue(prev));
      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);
  return (
    <View>
      <Text>CardBoard {cardNumber}</Text>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            disabled={disabled}
            flipped={card === choiceOne || card === choiceTwo}
            invisibility={card.matched}
          />
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
