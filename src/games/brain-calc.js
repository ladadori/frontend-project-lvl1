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
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const [expression, leftOperand, operator, rightOperand] = getRandomExpression(integerLimit);
    printQuestion(expression);
    const userAnswer = Number(getUserAnswer());
    const correctAnswer = getCalculation(leftOperand, operator, rightOperand);
    wonRoundCount += getRoundScore(userAnswer, correctAnswer, name);
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainCalc;
