import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
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
    const userAnswer = getUserAnswer();
    // vvv другая игра ломалась, когда убирала тернарник
    const userVictory = isAnswerCorrect(userAnswer, correctAnswer, 'string');

    if (userVictory === true) {
      log('Correct!');
      wonRoundCount += 1;
    } else {
      const stringCorrectAnswer = correctAnswer === true ? 'yes' : 'no';
      log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${stringCorrectAnswer}".`);
      log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainPrime;
