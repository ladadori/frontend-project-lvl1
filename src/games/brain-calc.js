import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  getRandomExpression,
  getCalculation,
  printGameRules,
} from '../index.js';

const startBrainCalc = () => {
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

  printGameRules('brainCalc');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const [expression, ...expressionParts] = getRandomExpression(integerLimit);
    printQuestion(expression);
    const userAnswer = getUserAnswer();
    const userAnswerToNumber = Number(userAnswer);
    const [leftOperand, operator, rightOperand] = expressionParts;
    const correctAnswer = getCalculation(leftOperand, operator, rightOperand);
    const userVictory = isAnswerCorrect(userAnswerToNumber, correctAnswer);

    if (userVictory === true) { // возможно, эту проверку можно тоже вынести отдельно,
      log('Correct!'); // но я не знаю, как унести в другой модуль имя пользователя,
      wonRoundCount += 1; // чтобы посочувствовать его поражению.
    } else { // или может надо не так много вынести?
      log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainCalc;
