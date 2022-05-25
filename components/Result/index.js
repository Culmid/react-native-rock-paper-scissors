import { View, Text } from "react-native";
import style from "./style";

export default function Result({ details }) {
  const winnerName = capitalize(details.winner);
  const winner =
    winnerName === "Draw" ? `${winnerName}!` : `${winnerName} Wins!`;
  let resultStatement = `${capitalize(details.computer)} = ${capitalize(
    details.player
  )}`;

  if (winnerName !== "Draw") {
    const loserChoice =
      winnerName === "Computer" ? details.player : details.computer;
    const winnerChoice = details[details.winner];
    resultStatement = `${capitalize(winnerChoice)} > ${capitalize(
      loserChoice
    )}`;
  }

  return (
    <View style={style.resultContainer}>
      <Text style={style.resultStatement}>{resultStatement}</Text>
      <Text style={style.winner}>{winner}</Text>
    </View>
  );
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
