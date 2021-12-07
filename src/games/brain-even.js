import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const startBrainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
  const maxNum = 20;

  const isEven = (num) => num % 2 === 0;
  const getQuestion = () => getRandomInteger(maxNum);
  const getCorrectAnswer = (integer) => (isEven(integer) ? 'yes' : 'no');

  runGameEngine(gameRule, getQuestion, getCorrectAnswer);
};

export default startBrainEven;
