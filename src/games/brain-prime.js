import runGameEngine from '../index.js';

import generateRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 10;
const isPrime = (number) => {
  if (number > 1) {
    const squareOfNumber = Math.sqrt(number);
    for (let i = 2; i <= squareOfNumber; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const generateGameData = () => {
  const question = generateRandomNumber(1, maxNum);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const runBrainPrime = () => runGameEngine(gameRule, generateGameData);

export default runBrainPrime;
