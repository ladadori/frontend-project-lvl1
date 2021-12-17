import runGameEngine from '../index.js';

import generateRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const NumberLimit = 10;
const operators = ['+', '-', '*'];

const generateGameData = () => {
  const firstNumber = generateRandomNumber(1, NumberLimit);
  const secondNumber = generateRandomNumber(1, NumberLimit);
  const operator = operators[generateRandomNumber(1, 3)];

  const calculate = (leftOperand, randomOperator, rightOperand) => {
    switch (randomOperator) {
      case '+':
        return leftOperand + rightOperand;
      case '*':
        return leftOperand * rightOperand;
      default:
    }
    return leftOperand - rightOperand;
  };

  const correctAnswer = calculate(firstNumber, operator, secondNumber).toString();
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  return [expression, correctAnswer];
};

const runBrainCalc = () => runGameEngine(gameRule, generateGameData);

export default runBrainCalc;
