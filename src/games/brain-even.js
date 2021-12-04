import {
  log,
  printQuestion,
  getUserAnswer,
  getRandomInteger,
  printGameRules,
  getRoundScore,
} from '../index.js';

import askName from '../cli.js';

const startBrainEven = () => {
  // Нужно записать имя пользователя в пределах области видимости,
  // поэтому не могу спрятать это в printGreeting()
  const name = askName();

  printGameRules('brainEven');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const integerLimit = 50;

  const isEven = (integer) => integer % 2 === 0;

  while (wonRoundCount < maxRoundCount) {
    const randomInteger = getRandomInteger(integerLimit);
    printQuestion(randomInteger);
    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomInteger) === true ? 'yes' : 'no';
    wonRoundCount += getRoundScore(userAnswer, correctAnswer, name);
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainEven;
