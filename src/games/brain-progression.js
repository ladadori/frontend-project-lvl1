import {
  log,
  printQuestion,
  getUserAnswer,
  printGameRules,
  getProgressionRiddle,
  getRoundScore,
} from '../index.js';

import askName from '../cli.js';

const startBrainProgression = () => {
  const name = askName();

  printGameRules('brainProgression');

  let wonRoundCount = 0;
  let breakSignal = false;
  const maxRoundCount = 3;
  const lengthLimit = 10;

  while (wonRoundCount < maxRoundCount && !breakSignal) {
    const [, stringProgressionRiddle, correctAnswer] = getProgressionRiddle(lengthLimit);
    printQuestion(stringProgressionRiddle);
    const userAnswer = Number(getUserAnswer());
    const roundScore = getRoundScore(userAnswer, correctAnswer, name);
    if (roundScore === 1) {
      wonRoundCount += 1;
    } else {
      breakSignal = true;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainProgression;
