import {
  log,
  printQuestion,
  getUserAnswer,
  gcd,
  printGameRules,
  getRandomInteger,
  getRoundScore,
} from '../index.js';

import askName from '../cli.js';

const startBrainGcd = () => {
  const name = askName();

  printGameRules('brainGcd');

  let wonRoundCount = 0;
  let breakSignal = false;
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount && !breakSignal) {
    const a = getRandomInteger(integerLimit);
    const b = getRandomInteger(integerLimit);
    printQuestion(a, b);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = gcd(a, b);
    const roundScore = getRoundScore(userAnswer, correctAnswer, name);
    if (roundScore === 1) {
      wonRoundCount += 1;
    } else {
      breakSignal = true;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainGcd;
