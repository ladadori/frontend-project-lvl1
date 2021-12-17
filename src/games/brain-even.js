import runGameEngine from '../index.js';

import generateRandomInteger from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const maxNum = 20;
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = generateRandomInteger(1, maxNum);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  const gameData = [question, correctAnswer];
  return gameData;
};

const runBrainEven = () => runGameEngine(gameRule, getGameData);

export default runBrainEven;
