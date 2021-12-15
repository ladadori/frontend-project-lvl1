import {
  runGameEngine,
} from '../index.js';

import {
  getRandomInteger,
} from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const progressionLengthLimit = 10;
const step = getRandomInteger(1, 3);

const getProgression = (maxLength) => {
  const startNumber = getRandomInteger(1, 30);
  const progression = [startNumber];
  let lastNumberIndex = 0;
  while (progression.length < maxLength) {
    progression.push(progression[lastNumberIndex] + step);
    lastNumberIndex += 1;
  }
  return progression;
};

const getProgressionRiddle = (progression) => {
  const blankIndex = getRandomInteger(1, progressionLengthLimit);
  const hiddenNumber = progression[blankIndex];
  const progressionRiddle = progression.slice(0);
  progressionRiddle[blankIndex] = '..';
  return [progressionRiddle, hiddenNumber];
};

const getGameData = () => {
  const progression = getProgression(progressionLengthLimit);
  const [progressionRiddle, hiddenNumber] = getProgressionRiddle(progression);
  const progressionRiddleString = progressionRiddle.join(' ');
  const hiddenNumberString = hiddenNumber.toString();
  return [progressionRiddleString, hiddenNumberString];
};

const startBrainProgression = () => runGameEngine(gameRule, getGameData);

export default startBrainProgression;
