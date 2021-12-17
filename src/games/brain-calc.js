import runGameEngine from '../index.js';

import generateRandomInteger from '../utils.js';

const gameRule = 'What is the result of the expression?';
const maxNum = 10;

const getRandomExpression = (IntegerLimit) => {
  const leftOperand = generateRandomInteger(1, IntegerLimit);
  const rightOperand = generateRandomInteger(1, IntegerLimit);
  const operators = ['+', '-', '*'];
  const countOfOperators = operators.length;
  const getRandomOperator = () => {
    const indexOfOperator = generateRandomInteger(1, countOfOperators);
    const operator = operators[indexOfOperator];
    return operator;
  };
  const operator = getRandomOperator();
  const operandsAndOperator = [leftOperand, operator, rightOperand];
  return operandsAndOperator;
};

const calculate = (operandsAndOperator) => {
  const [leftOperand, operator, rightOperand] = operandsAndOperator;
  switch (operator) {
    case '-':
      return leftOperand - rightOperand;
    case '+':
      return leftOperand + rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
  }
  return 'fuck consistent-return rule';
};

const generateExpression = () => {
  const operandsAndOperator = getRandomExpression(maxNum);
  const [leftOperand, operator, rightOperand] = operandsAndOperator;
  const correctAnswer = calculate(operandsAndOperator);
  const stringCorrectAnswer = correctAnswer.toString();
  const stringExpression = `${leftOperand} ${operator} ${rightOperand}`;
  return [stringExpression, stringCorrectAnswer];
};

const startBrainCalc = () => runGameEngine(gameRule, generateExpression);

export default startBrainCalc;
