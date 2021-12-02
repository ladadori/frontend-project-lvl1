import readlineSync from 'readline-sync';

import {
    log,
    isAnswerCorrect,
    printQuestion,
    getUserAnswer,
    printSorry,
    getRandomExpression,
    getCalculation
  } from '../index.js';

const startBrainCalc = () => {
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

  const gameRules = 'What is the result of the expression?';
  log(gameRules);

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const integerLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const [expression, ...expressionParts] = getRandomExpression(integerLimit);
    printQuestion(expression);
    const userAnswer = Number(getUserAnswer());
    const [leftOperand, operator, rightOperand] = expressionParts;
    const correctAnswer = getCalculation(leftOperand, operator, rightOperand);
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

  }

export default startBrainCalc;