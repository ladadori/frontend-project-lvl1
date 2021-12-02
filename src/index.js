import readlineSync from 'readline-sync';

export const { log } = console;
export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
export const printQuestion = (question) => log(`Question: ${question}`);
export const getUserAnswer = () => readlineSync.question('Your answer: ');
export const getRandomInteger = (integerLimit) => Math.floor(Math.random() * integerLimit);
export const printSorry = (name, userAnswer, correctAnswer) => {
  log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  log(`Let's try again, ${name}`);
};
export const getRandomExpression = (IntegerLimit) => {
  const leftOperand = getRandomInteger(IntegerLimit);
  const rightOperand = getRandomInteger(IntegerLimit);
  const operators = ['+', '-', '*'];
  const getRandomOperator = () => {
    const indexOfOperator = getRandomInteger(3);
    const operator = operators[indexOfOperator];
    return operator;
  };
  const operator = getRandomOperator();
  const stringExpression = `${leftOperand} ${operator} ${rightOperand}`;
  const expressionCollection = [stringExpression, leftOperand, operator, rightOperand];
  return expressionCollection;
};

export const getCalculation = (leftOperand, operator, rightOperand) => {
  switch (operator) {
    case '-':
      return leftOperand - rightOperand;
    case '+':
      return leftOperand + rightOperand;
    case '*':
      return leftOperand * rightOperand; // линтер ругается, что нет возврата значения в конце стрелочной функции.
  } // я по-злодейски отлючила это правило, нужна консультация как соблюсти тут consistent return.
};
