import {
  getRandomInteger,
  runGameEngine,
} from '../index.js';

const startBrainProgression = () => {
  const gameRule = 'What number is missing in the progression?';

  const progressionLengthLimit = 10;
  const step = 2;

  const getProgression = (maxLength) => {
    const startNumber = getRandomInteger(undefined, 30);
    const progression = [startNumber];
    let lastNumberIndex = 0;
    while (progression.length < maxLength) {
      progression.push(progression[lastNumberIndex] + step);
      lastNumberIndex += 1;
    }
    return progression;
  };

  const getProgressionRiddle = (progression) => {
    const blankIndex = getRandomInteger(undefined, progressionLengthLimit);
    const progressionRiddle = progression.slice(0);
    progressionRiddle[blankIndex] = '..';
    return progressionRiddle;
  };

  // Учим машину искать скрытое число, поскольку движок никогда не
  // получает готовый ответ, он всегда сам вычисляет его.

  const getHiddenNumber = (progressionRiddle) => {
    const stringArrayProgressionRiddle = progressionRiddle.split(' ');
    const arrayProgressionRiddle = [];
    let hiddenNumberIndex = 0;
    let hiddenNumber;

    /* eslint-disable-next-line */
    for (const word of stringArrayProgressionRiddle) {
      arrayProgressionRiddle.push(Number(word));
    }

    /* eslint-disable-next-line */
    for (const word of stringArrayProgressionRiddle) {
      if (word === '..') {
        hiddenNumberIndex = stringArrayProgressionRiddle.indexOf(word);
      }
    }

    const lastNumberIndex = progressionLengthLimit - 1;

    if (hiddenNumberIndex < lastNumberIndex) {
      const indexAfterHidden = hiddenNumberIndex + 1;
      const numberAfterHidden = arrayProgressionRiddle[indexAfterHidden];
      hiddenNumber = numberAfterHidden - step;
    }

    if (hiddenNumberIndex === lastNumberIndex) {
      const indexBeforeHidden = hiddenNumberIndex - 1;
      const numberBeforeHidden = arrayProgressionRiddle[indexBeforeHidden];
      hiddenNumber = numberBeforeHidden + step;
    }

    return hiddenNumber.toString();
  };

  const getQuestion = () => {
    const progression = getProgression(progressionLengthLimit);
    const progressionRiddle = getProgressionRiddle(progression);
    const progressionRiddleString = progressionRiddle.join(' ');
    return progressionRiddleString;
  };

  const getCorrectAnswer = (progressionRiddleString) => getHiddenNumber(progressionRiddleString);

  runGameEngine(gameRule, getQuestion, getCorrectAnswer);
};

export default startBrainProgression;
