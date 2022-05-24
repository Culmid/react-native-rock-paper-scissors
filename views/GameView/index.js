import React from "react";
import style from "./style";
import { View } from "react-native";
import GameButton from "../../components/GameButton";
import { playRound } from "../../game/game";

export default function GameView() {
  function handleButtonClick(choice) {
    console.log(playRound(choice));
  }

  return (
    <View>
      <View style={style.buttonsContainer}>
        <GameButton type="rock" onPress={() => handleButtonClick("rock")} />
        <GameButton type="paper" onPress={() => handleButtonClick("paper")} />
        <GameButton
          type="scissors"
          onPress={() => handleButtonClick("scissors")}
        />
      </View>
    </View>
  );
}
