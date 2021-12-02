import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  getRandomInteger,
  printSorry,
  printGameRules,
  printGameRules,
} from '../index.js';

const startBrainEven = () => {
  // Нужно записать имя пользователя в пределах области видимости,
  // поэтому не могу спрятать это в printGreeting()
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

  printGameRules('brainEven');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const integerLimit = 50;

  const isEven = (integer) => integer % 2 === 0;

  while (wonRoundCount < maxRoundCount) {
    const randomInteger = getRandomInteger(integerLimit);
    printQuestion(randomInteger);
    const userAnswer = getUserAnswer() === 'yes';
    const correctAnswer = isEven(randomInteger);
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

export default startBrainEven;
