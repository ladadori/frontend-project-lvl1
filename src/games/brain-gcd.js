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
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const a = getRandomInteger(integerLimit);
    const b = getRandomInteger(integerLimit);
    printQuestion(a, b);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = gcd(a, b);
    wonRoundCount += getRoundScore(userAnswer, correctAnswer, name);
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainGcd;
