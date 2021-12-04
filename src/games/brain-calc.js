import {
  log,
  printQuestion,
  getUserAnswer,
  getRandomExpression,
  getCalculation,
  printGameRules,
  getRoundScore,
} from '../index.js';

import askName from '../cli.js';

const startBrainCalc = () => {
  const name = askName();

  printGameRules('brainCalc');

  let wonRoundCount = 0;
  let breakSignal = false;
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount && !breakSignal) {
    const [expression, leftOperand, operator, rightOperand] = getRandomExpression(integerLimit);
    printQuestion(expression);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = getCalculation(leftOperand, operator, rightOperand);
    const roundScore = getRoundScore(userAnswer, correctAnswer, name);
    if (roundScore === 1) {
      wonRoundCount += 1;
    } else {
      breakSignal = true;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainCalc;
