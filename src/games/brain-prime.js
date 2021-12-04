import {
  log,
  printQuestion,
  getUserAnswer,
  printGameRules,
  getRandomInteger,
  isPrime,
  getRoundScore,
} from '../index.js';

import askName from '../cli.js';

const startBrainPrime = () => {
  const name = askName();

  printGameRules('brainPrime');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const maxInteger = 10;

  while (wonRoundCount < maxRoundCount) {
    const randomInteger = getRandomInteger(maxInteger);
    printQuestion(randomInteger);
    const correctAnswer = isPrime(randomInteger) === true ? 'yes' : 'no';
    const userAnswer = getUserAnswer();
    wonRoundCount = wonRoundCount + getRoundScore(userAnswer, correctAnswer, name);
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainPrime;
