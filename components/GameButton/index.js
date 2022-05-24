import { Pressable, View, Text } from "react-native";
import style from "./style";

export default function GameButton({ type = "rock", onPress }) {
  let icon = "✊";
  if (type === "paper") {
    icon = "✋";
  } else if (type === "scissors") {
    icon = "✌️";
  }

  return (
    <Pressable onPress={onPress} style={style.outerContainer}>
      <View style={style.innerContainer}>
        <Text style={style.text}>{icon}</Text>
      </View>
    </Pressable>
  );
}
