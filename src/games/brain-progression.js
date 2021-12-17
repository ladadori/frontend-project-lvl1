import runGameEngine from '../index.js';

import generateRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const progressionLengthLimit = 10;
const step = generateRandomNumber(1, 3);

const generateProgression = (maxLength) => {
  const progression = [1];
  let lastNumberIndex = 0;
  while (progression.length < maxLength) {
    progression.push(progression[lastNumberIndex] + step);
    lastNumberIndex += 1;
  }
  return progression;
};

const generateProgressionRiddle = (progression) => {
  const blankIndex = generateRandomNumber(1, progressionLengthLimit - 1);
  const hiddenNumber = progression[blankIndex];
  const progressionRiddle = progression.slice(0);
  progressionRiddle[blankIndex] = '..';
  return [progressionRiddle, hiddenNumber];
};

const getGameData = () => {
  const progression = generateProgression(progressionLengthLimit);
  const [progressionRiddle, hiddenNumber] = generateProgressionRiddle(progression);
  const progressionRiddleString = progressionRiddle.join(' ');
  const hiddenNumberString = hiddenNumber.toString();
  return [progressionRiddleString, hiddenNumberString];
};

const runBrainProgresson = () => runGameEngine(gameRule, getGameData);

export default runBrainProgresson;
