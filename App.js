import { View } from "react-native";
import style from "./App.style";
import GameView from "./views/GameView";

export default function App() {
  return (
    <View style={style.container}>
      <GameView />
    </View>
  );
}
