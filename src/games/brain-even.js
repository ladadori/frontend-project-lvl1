import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const maxNum = 20;

const getGameData = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomInteger(undefined, maxNum);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  const gameDataCollection = [question, correctAnswer];
  return gameDataCollection;
};

const startBrainEven = () => runGameEngine(gameRule, getGameData);

export default startBrainEven;
