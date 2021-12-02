import readlineSync from 'readline-sync';

export const { log } = console;

export const printGameRules = (gameName) => {
  switch (gameName) {
    case 'brainEven':
      log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brainCalc':
      log('What is the result of the expression?');
      break;
    case 'brainGcd':
      log('Find the greatest common divisor of given numbers.');
      break;
  }
};

export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
export const printQuestion = (question, optionalQuestion) => log(`Question: ${question} ${optionalQuestion}`);
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
      return leftOperand * rightOperand;
      // линтер ругается, что нет consistent return.
      // я по-злодейски отлючила это правило, нужна консультация
      // как соблюсти его (если надо).
  }
};

//  vvv Слизала с инернета, сама не смогла за полчаса написать.
export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
