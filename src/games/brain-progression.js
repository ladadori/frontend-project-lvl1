import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  printSorry,
  printGameRules,
  getProgressionRiddle,
} from '../index.js';

const startBrainProgression = () => {
  log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);

  printGameRules('brainProgression');

  let wonRoundCount = 0;
  const maxRoundCount = 3;
  const lengthLimit = 10;

  while (wonRoundCount < maxRoundCount) {
    const [progressionRiddle, correctAnswer] = getProgressionRiddle(lengthLimit);
    printQuestion(progressionRiddle);
    const userAnswer = Number(getUserAnswer());
    const userVictory = isAnswerCorrect(userAnswer, correctAnswer);

    if (userVictory === true) {
      log('Correct!');
      wonRoundCount += 1;
    } else {
      printSorry(name, userAnswer, correctAnswer);
      break;
    }
  }

  if (wonRoundCount === 3) log(`Congratulations, ${name}!`);
};

export default startBrainProgression;