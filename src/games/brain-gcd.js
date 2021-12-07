import {
  getRandomInteger,
  log,
  runGameEngine,
} from '../index.js';

const startBrainGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const maxNum = 20;

  const getQuestion = () => {
    const [firstNum, secondNum] = [getRandomInteger(maxNum), getRandomInteger(maxNum)];
    const stringNumPair = `${firstNum} ${secondNum}`;
    return stringNumPair;
  };

  const getCorrectAnswer = (stringNumPair) => {

    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

    const getNumPair = (stringNumPair) => {
      
      const [stringFirstNum, stringSecondNum] = stringNumPair.split(' ');
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
