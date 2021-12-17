import runGameEngine from '../index.js';

import generateRandomInteger from '../utils.js';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const gameRule = 'Find the greatest common divisor of given numbers.';
const maxNum = 20;

const generateNumPair = () => {
  const firstNum = generateRandomInteger(1, maxNum);
  const secondNum = generateRandomInteger(1, maxNum);
  const numPair = [firstNum, secondNum];
  return numPair;
};

const generateGameData = () => {
  const [a, b] = generateNumPair();
  const question = `${a} ${b}`;
  const correctAnswer = getGCD(a, b).toString();
  return [question, correctAnswer];
};

const runBrainGCD = () => {
  runGameEngine(gameRule, generateGameData);
};

export default runBrainGCD;
