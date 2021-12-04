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
  const name = askName();

  printGameRules('brainEven');

  let wonRoundCount = 0;
  let breakSignal = false;
  const maxRoundCount = 3;
  const integerLimit = 50;

  const isEven = (integer) => integer % 2 === 0;

  while (wonRoundCount < maxRoundCount && !breakSignal) {
    const randomInteger = getRandomInteger(integerLimit);
    printQuestion(randomInteger);
    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomInteger) === true ? 'yes' : 'no';
    const roundScore = getRoundScore(userAnswer, correctAnswer, name);
    roundScore === 1 ? wonRoundCount += 1 : breakSignal = true;
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainEven;
