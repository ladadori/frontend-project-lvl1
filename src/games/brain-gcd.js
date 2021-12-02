import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  printSorry,
  gcd,
  printGameRules,
  getRandomInteger,
} from '../index.js';

const startBrainGcd = () => {
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

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
    const userVictory = isAnswerCorrect(userAnswer, correctAnswer);

    if (userVictory === true) {
      log('Correct!');
      wonRoundCount += 1;
    } else {
      printSorry(name, userAnswer, correctAnswer);
      break;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainGcd;
