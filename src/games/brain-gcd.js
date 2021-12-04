import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  gcd,
  printGameRules,
  getRandomInteger,
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
    const userVictory = isAnswerCorrect(userAnswer, correctAnswer);

    if (userVictory === true) {
      log('Correct!');
      wonRoundCount += 1;
    } else {
      log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainGcd;
