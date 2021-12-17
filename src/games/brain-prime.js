import runGameEngine from '../index.js';

import generateRandomInteger from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 10;
const isPrime = (integer) => {
  const squareOfInteger = Math.sqrt(integer);
  for (let i = 2; i <= squareOfInteger; i += 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return integer > 1;
};

const generateGameData = () => {
  const question = generateRandomInteger(1, maxNum);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const runBrainPrime = () => runGameEngine(gameRule, generateGameData);

export default runBrainPrime;
