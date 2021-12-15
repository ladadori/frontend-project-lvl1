import {
  runGameEngine,
} from '../index.js';

import {
  getRandomInteger,
} from '../utils.js';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxNum = 20;
const getQuestion = () => {
  const firstNum = getRandomInteger(1, maxNum);
  const secondNum = getRandomInteger(1, maxNum);
  const stringNumPair = `${firstNum} ${secondNum}`;
  return stringNumPair;
};

const getCorrectAnswer = (stringNumPair) => {
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

const getGameData = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  const gameDataCollection = [question, correctAnswer];
  return gameDataCollection;
};

const startBrainGcd = () => {
  runGameEngine(gameRule, getGameData);
};

export default startBrainGcd;
