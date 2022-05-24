import React from "react";
import style from "./style";
import { View } from "react-native";
import GameButton from "../../components/GameButton";

function GameView() {
  function onGameButtonClick() {
    console.log("Clicked");
  }

  return (
    <View>
      <View style={style.buttonsContainer}>
        <GameButton type="rock" onPress={onGameButtonClick} />
        <GameButton type="paper" onPress={onGameButtonClick} />
        <GameButton type="scissors" onPress={onGameButtonClick} />
      </View>
    </View>
  );
}

export default GameView;
