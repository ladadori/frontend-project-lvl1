import runGameEngine from '../index.js';

import generateRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const maxNum = 10;

const generateRandomExpression = (NumberLimit) => {
  const leftOperand = generateRandomNumber(1, NumberLimit);
  const rightOperand = generateRandomNumber(1, NumberLimit);
  const operators = ['+', '-', '*'];
  const countOfOperators = operators.length;
  const generateRandomOperator = () => {
    const indexOfOperator = generateRandomNumber(1, countOfOperators);
    const operator = operators[indexOfOperator];
    return operator;
  };
  const operator = generateRandomOperator();
  const operandsAndOperator = [leftOperand, operator, rightOperand];
  return operandsAndOperator;
};

const calculate = (operandsAndOperator) => {
  const [leftOperand, operator, rightOperand] = operandsAndOperator;
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
  }
  return leftOperand - rightOperand;
};

const generateGameData = () => {
  const operandsAndOperator = generateRandomExpression(maxNum);
  const [leftOperand, operator, rightOperand] = operandsAndOperator;
  const correctAnswer = calculate(operandsAndOperator).toString();
  const expression = `${leftOperand} ${operator} ${rightOperand}`;
  return [expression, correctAnswer];
};

const runBrainCalc = () => runGameEngine(gameRule, generateGameData);

export default runBrainCalc;
