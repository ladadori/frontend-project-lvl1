import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const startBrainGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const maxNum = 20;

  const getQuestion = () => {
    const firstNum = getRandomInteger(undefined, maxNum);
    const secondNum = getRandomInteger(undefined, maxNum);
    const stringNumPair = `${firstNum} ${secondNum}`;
    return stringNumPair;
  };

  const getCorrectAnswer = (stringNumPair) => {
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

    const getNumPair = (numPair) => {
      const [stringFirstNum, stringSecondNum] = numPair.split(' ');
      const [firstNum, secondNum] = [Number(stringFirstNum), Number(stringSecondNum)];
      const arrayNumPair = [firstNum, secondNum];
      return arrayNumPair;
    };

    const arrayNumPair = getNumPair(stringNumPair);
    const [a, b] = arrayNumPair;
    const correctAnswer = getGCD(a, b);
    const stringCorrectAnswer = correctAnswer.toString();
    return stringCorrectAnswer;
  };

  runGameEngine(gameRule, getQuestion, getCorrectAnswer);
};

export default startBrainGcd;
