import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const maxNum = 10;

const getRandomExpression = (IntegerLimit) => {
  const leftOperand = getRandomInteger(1, IntegerLimit);
  const rightOperand = getRandomInteger(1, IntegerLimit);
  const operators = ['+', '-', '*'];
  const getRandomOperator = () => {
    const indexOfOperator = getRandomInteger(1, 3);
    const operator = operators[indexOfOperator];
    return operator;
  };

const operator = [leftOperand, operator, rightOperand];

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

const getGameData = () => {
  const getQuestion = () => {
    const expressionCollection = getRandomExpression(maxNum);
    const [leftOperand, operator, rightOperand] = expressionCollection;
    const stringExpression = `${leftOperand} ${operator} ${rightOperand}`;
    return stringExpression;
  };

  const getCorrectAnswer = (stringExpression) => {
    const expressionCollection = stringExpression.split(' ');
    const correctAnswer = getCalculation(expressionCollection);
    return correctAnswer.toString();
  };

  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  const gameDataCollection = [question, correctAnswer];
  return gameDataCollection;
};

const startBrainCalc = () => runGameEngine(gameRule, getGameData);

export default startBrainCalc;
