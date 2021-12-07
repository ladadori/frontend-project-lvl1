import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const startBrainCalc = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
  const maxNum = 10;

  const getRandomExpression = (IntegerLimit) => {
    const leftOperand = getRandomInteger(IntegerLimit);
    const rightOperand = getRandomInteger(IntegerLimit);
    const operators = ['+', '-', '*'];
    const getRandomOperator = () => {
      const indexOfOperator = getRandomInteger(3);
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
        return leftOperand - rightOperand;
      case '*':
        return leftOperand - rightOperand;
      default:
    }
    return 'fuck consistent-return rule';
  };

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

  runGameEngine(gameRule, getQuestion, getCorrectAnswer);
};

export default startBrainCalc;
