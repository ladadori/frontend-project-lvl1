import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const startBrainPrime = () => {
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

  const getQuestion = () => getRandomInteger(maxNum);
  const getCorrectAnswer = (integer) => (isPrime(integer) ? 'yes' : 'no');

  runGameEngine(gameRule, getQuestion, getCorrectAnswer);
};

export default startBrainPrime;
