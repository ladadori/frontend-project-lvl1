import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  getRandomInteger,
  printGameRules,
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

export default startBrainEven;
