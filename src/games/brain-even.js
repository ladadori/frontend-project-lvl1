import runGameEngine from '../index.js';

import getRandomInteger from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const maxNum = 20;
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomInteger(1, maxNum);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  const gameDataCollection = [question, correctAnswer];
  return gameDataCollection;
};

const startBrainEven = () => runGameEngine(gameRule, getGameData);

export default startBrainEven;
