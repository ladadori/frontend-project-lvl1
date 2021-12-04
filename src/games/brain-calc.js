import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  getRandomExpression,
  getCalculation,
  printGameRules,
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
    const userAnswer = getUserAnswer();
    const userAnswerToNumber = Number(userAnswer);
    const correctAnswer = getCalculation(leftOperand, operator, rightOperand);
    const userVictory = isAnswerCorrect(userAnswerToNumber, correctAnswer);

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

export default startBrainCalc;
