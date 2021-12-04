import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  printGameRules,
  getRandomInteger,
  isPrime,
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

export default startBrainPrime;
