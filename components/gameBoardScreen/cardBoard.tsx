import { LevelContext } from "@/app/gameBoardScreen";
import { height } from "@/constants/constant";
import StarSky from "@/constants/StarSky";
import React, { useContext, useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import BgWaveSecondType from "./bgWawe";
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
  const [cardsOnBoard, setCardsOnBoard] = useState(cardNumber);
  const changeBoardAnim = new Animated.Value(0);
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
    if (card.matched) return;
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
  const updLeftCardOnBoard = (prev: number) => {
    return (prev = prev - 1);
  };
  useEffect(() => {
    if (!choiceOne || !choiceTwo) return;
    setDisabled(true);
    if (choiceOne.src === choiceTwo.src && choiceOne.id !== choiceTwo.id) {
      setCards((prev) => updCardValue(prev));
      setCardsOnBoard((prev) => updLeftCardOnBoard(prev));
      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);
  useEffect(() => {
    if (cardsOnBoard > 0) return;

    Animated.timing(changeBoardAnim, {
      toValue: 100,
      useNativeDriver: false,
      duration: 1500,
      delay: 1000,
    }).start();
  }, [cardsOnBoard]);
  const animTranslateY = changeBoardAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [0, height],
  });
  return (
    <Animated.View
      style={{
        position: "relative",
      }}
    >
      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("@/assets/images/cardBoardBg.png")}
          resizeMode="cover"
          style={styles.fullScreen}
        >
          <StarSky />
          <Animated.View
            style={[
              styles.waveContainer,
              { transform: [{ translateY: animTranslateY }] },
            ]}
          >
            <BgWaveSecondType />
          </Animated.View>
        </ImageBackground>
      </View>
      <Animated.View
        style={[
          styles.cardsContainer,
          { transform: [{ translateY: animTranslateY }] },
        ]}
      >
        <FlatList
          data={cards}
          numColumns={cardNumber}
          renderItem={({ item }) => (
            <SingleCard
              key={item.id}
              card={item}
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={item === choiceOne || item === choiceTwo}
              invisibility={item.matched}
            />
          )}
          style={{ alignContent: "center" }}
        ></FlatList>
      </Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  fullScreen: {
    height: "100%",
    width: "100%",
  },
  waveContainer: {
    height: "80%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  cardsContainer: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
    bottom: "10%",
  },
});
