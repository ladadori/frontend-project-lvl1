import readlineSync from 'readline-sync';

export const { log } = console; // мне так удобнее. если это не криминал, я бы не исправляла

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
    case 'brainProgression':
      log('What number is missing in the progression?');
      break;
    case 'brainPrime':
      log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default: // это тут из-за правила eslint default-case
  }
};

export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const printQuestion = (question, optionalQuestion = '') => log(`Question: ${question} ${optionalQuestion}`);
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getRandomInteger = (max, min = 0) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
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
  let answer;
  switch (operator) {
    case '-':
      answer = leftOperand - rightOperand;
      break;
    case '+':
      answer = leftOperand + rightOperand;
      break;
    case '*':
      answer = leftOperand * rightOperand;
      break;
    default:
  }
  return answer; // это чудо из-за правила eslint consistent-return
};

//  vvv Слизала с инернета, сама не смогла за полчаса написать.
export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getProgression = (lengthLimit) => {
  const progressionStep = getRandomInteger(5, 2);
  const firstProgressionNumber = getRandomInteger(10);
  const progression = [firstProgressionNumber];
  let lastAddedNumberIndex = 0;
  while (progression.length < lengthLimit) {
    const newProgressionNumber = progression[lastAddedNumberIndex] + progressionStep;
    progression.push(newProgressionNumber);
    lastAddedNumberIndex += 1;
  }
  return progression;
};

export const getProgressionRiddle = (lengthLimit) => {
  const progression = getProgression(lengthLimit);
  const progressionLength = progression.length;
  const blankIndex = getRandomInteger(progressionLength);
  const hiddenNumber = progression[blankIndex];
  const progressionWithBlank = progression.slice(0);
  progressionWithBlank[blankIndex] = '..';
  const stringProgressionWithBlank = progressionWithBlank.join(' ');
  return [progressionWithBlank, stringProgressionWithBlank, hiddenNumber];
};

export const isPrime = (integer) => { // решение со стак оверфлоу,
  const squareOfInteger = Math.sqrt(integer); // ибо список простых чисел копировался
  for (let i = 2; i <= squareOfInteger; i += 1) { // с поехавшим форматированием.
    if (integer % i === 0) {
      return false;
    }
  }
  return integer > 1;
};

export const getRoundScore = (userAnswer, correctAnswer, name) => {
  const userVictory = isAnswerCorrect(userAnswer, correctAnswer);
  if (userVictory === true) {
    log('Correct!');
    return 1;
  }
  log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  log(`Let's try again, ${name}!`);
  return 0;
};
