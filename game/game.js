import { getRandomNumber } from "../utils/common";

const choices = ["rock", "paper", "scissors"];

/**
 * Plays a round of Rock, Paper and Scissors
 * @param {string} player The user's choice of 'rock', 'paper' or 'scissors'
 * @example
 * ```js
 * const result = playRound('rock');
 * // Plays a round of Rock Paper Scissor with the user choice
 * // of "rock"
 * ```
 */
function playRound(player) {
  const randomNumber = getRandomNumber(0, 2);
  const computer = choices[randomNumber];

  let round = { player, computer, winner: null };

  if (player === computer) {
    round.winner = "draw";
  } else if (randomNumber === (choices.indexOf(player) + 1) % 3) {
    round.winner = "computer";
  } else {
    round.winner = "player";
  }

  return round;
}

export { playRound };
