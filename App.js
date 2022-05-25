import { View, Text } from "react-native";
import style from "./App.style";
import GameView from "./views/GameView";

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Rock Paper Scissors</Text>
      <GameView />
      <Text></Text>
    </View>
  );
}
