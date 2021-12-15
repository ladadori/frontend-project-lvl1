import runGameEngine from '../index.js';

import getRandomInteger from '../utils.js';

const gameRule = 'What is the result of the expression?';
const maxNum = 10;

const getRandomExpression = (IntegerLimit) => {
  const leftOperand = getRandomInteger(1, IntegerLimit);
  const rightOperand = getRandomInteger(1, IntegerLimit);
  const operators = ['+', '-', '*'];
  const countOfOperators = operators.length;
  const getRandomOperator = () => {
    const indexOfOperator = getRandomInteger(1, countOfOperators);
    const operator = operators[indexOfOperator];
    return operator;
  };
  const operator = getRandomOperator();
  const expressionCollection = [leftOperand, operator, rightOperand];
  return expressionCollection;
};

const getCalculation = (expressionCollection) => {
  const [leftOperand, operator, rightOperand] = expressionCollection;
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

const getExpression = () => {
  const expressionCollection = getRandomExpression(maxNum);
  const [leftOperand, operator, rightOperand] = expressionCollection;
  const correctAnswer = getCalculation(expressionCollection);
  const stringCorrectAnswer = correctAnswer.toString();
  const stringExpression = `${leftOperand} ${operator} ${rightOperand}`;
  return [stringExpression, stringCorrectAnswer];
};

const startBrainCalc = () => runGameEngine(gameRule, getExpression);

export default startBrainCalc;
