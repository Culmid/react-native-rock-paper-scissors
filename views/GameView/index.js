import React, { useState } from "react";
import style from "./style";
import { View, Text } from "react-native";
import GameButton from "../../components/GameButton";
import { playRound } from "../../game/game";
import Result from "../../components/Result";

export default function GameView() {
  const [result, setResult] = useState(null);

  function handleButtonClick(choice) {
    setResult(playRound(choice));
  }

  return (
    <View style={style.gameContainer}>
      <Text style={style.chooseHeader}>Choose an Option</Text>
      <View style={style.buttonsContainer}>
        <GameButton type="rock" onPress={() => handleButtonClick("rock")} />
        <GameButton type="paper" onPress={() => handleButtonClick("paper")} />
        <GameButton
          type="scissors"
          onPress={() => handleButtonClick("scissors")}
        />
      </View>
      {result && <Result details={result} />}
    </View>
  );
}
