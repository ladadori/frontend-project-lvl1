import {
  log,
  printQuestion,
  getUserAnswer,
  printGameRules,
  getProgressionRiddle,
  getRoundScore
} from '../index.js';

import askName from '../cli.js';

const startBrainProgression = () => {
  const name = askName();

  printGameRules('brainProgression');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const lengthLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const [, stringProgressionRiddle, correctAnswer] = getProgressionRiddle(lengthLimit);
    printQuestion(stringProgressionRiddle);
    const userAnswer = Number(getUserAnswer());
    wonRoundCount = wonRoundCount + getRoundScore(userAnswer, correctAnswer, name);
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainProgression;
