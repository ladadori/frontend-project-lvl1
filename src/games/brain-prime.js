import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  printSorry,
  printGameRules,
  getRandomInteger,
  isPrime,
} from '../index.js';

const startBrainPrime = () => {
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

  printGameRules('brainPrime');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const maxInteger = 10;

  while (wonRoundCount < maxRoundCount) {
    const randomInteger = getRandomInteger(maxInteger);
    printQuestion(randomInteger);
    const correctAnswer = isPrime(randomInteger);
    const userAnswer = getUserAnswer() === 'yes';
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

export default startBrainPrime;
