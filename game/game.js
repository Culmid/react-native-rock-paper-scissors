import { getRandomNumber } from "../utils/common";

const choices = ["rock", "paper", "scissors"];

/**
 * Plays a round of Rock, Paper and Scissors
 * @param {string} userChoice The user's choice of 'rock', 'paper' or 'scissors'
 * @example
 * ```js
 * const result = playRound('rock');
 * // Plays a round of Rock Paper Scissor with the user choice
 * // of "rock"
 * ```
 */
function playRound(userChoice) {
  const randomNumber = getRandomNumber(0, 2);
  const computerChoice = choices[randomNumber];

  let round = { userChoice, computerChoice, winner: null };

  if (userChoice === computerChoice) {
    round.winner = "draw";
  } else if (randomNumber === (choices.indexOf(userChoice) + 1) % 3) {
    round.winner = "computer";
  } else {
    round.winner = "player";
  }

  return round;
}

export { playRound };
