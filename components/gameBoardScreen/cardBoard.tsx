import { LevelContext } from "@/app/gameBoardScreen";
import { height, stylesConst } from "@/constants/constant";
import GoBackButton from "@/constants/goBackButton";
import StarSky from "@/constants/StarSky";
import React, { useContext, useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import BgWaveSecondType from "../../constants/bgWawe";
import HintButton from "./hintButton";
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
type CardBoardProps = {
  isDone: (done: boolean) => void;
};
export default function CardBoard({ isDone }: CardBoardProps) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [isHintedCards, setIsHintedCards] = useState<number[]>([]);
  const cardNumber = useContext(LevelContext) / 2;
  const [cardsOnBoard, setCardsOnBoard] = useState(cardNumber);
  const changeBoardAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(1);

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
    if (choiceOne?.id === card.id) return;
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
    if (choiceOne.src === choiceTwo.src) {
      setCards((prev) => updCardValue(prev));
      setCardsOnBoard((prev) => updLeftCardOnBoard(prev));
      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (isHintedCards.length > 0) {
      const timer = setTimeout(() => {
        setIsHintedCards([]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isHintedCards]);

  useEffect(() => {
    if (cardsOnBoard > 0) return;
    Animated.timing(changeBoardAnim, {
      toValue: 100,
      useNativeDriver: true,
      duration: 1500,
      delay: 1500,
    }).start();
    setTimeout(() => isDone(true), 3000);
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, [cardsOnBoard]);

  const animTranslateY = changeBoardAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [0, height],
  });
  return (
    <View style={{ overflow: "hidden" }}>
      <Animated.View
        style={[
          stylesConst.fullScreen,
          { position: "absolute", top: 0, opacity: opacityAnim },
        ]}
      >
        <StarSky />
      </Animated.View>
      <Animated.View
        style={[
          stylesConst.fullScreen,
          {
            position: "relative",
            transform: [{ translateY: animTranslateY }],
          },
        ]}
      >
        <Animated.View
          style={[styles.goBackButtonContainer, { opacity: opacityAnim }]}
        >
          <GoBackButton buttonSize={50} isInGame={true} />
        </Animated.View>
        <Animated.View
          style={[styles.hintButtonContainer, { opacity: opacityAnim }]}
        >
          <HintButton
            choiceOne={choiceOne}
            cardArray={cards}
            buttonSize={50}
            setHintedCards={setIsHintedCards}
          />
        </Animated.View>
        <View style={styles.waveContainer}>
          <BgWaveSecondType />
        </View>
        <View style={styles.cardsContainer}>
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
                hinted={isHintedCards.includes(item.id)}
              />
            )}
            style={{ alignContent: "center" }}
          ></FlatList>
        </View>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  waveContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: "-20%",
  },
  cardsContainer: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
    bottom: "10%",
  },
  hintButtonContainer: {
    position: "absolute",
    right: "5%",
    top: "5%",
  },
  goBackButtonContainer: {
    position: "absolute",
    left: "5%",
    top: "5%",
  },
});
