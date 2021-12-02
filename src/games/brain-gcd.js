import readlineSync from 'readline-sync';

import {
  log,
  isAnswerCorrect,
  printQuestion,
  getUserAnswer,
  printSorry,
  getRandomExpression,
  getCalculation,
  gcd,
  printGameRules,
} from '../index.js';

const startBrainCalc = () => {
    log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    log(`Hello, ${name}!`);
  
    printGameRules(brainGcd);

    let wonRoundCount = 0;
    const maxRoundCount = 3;
    const integerLimit = 10;

    while (wonRoundCount < maxRoundCount) {