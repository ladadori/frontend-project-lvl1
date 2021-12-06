import readlineSync from 'readline-sync';
import askName from './cli.js'

export const { log } = console; // мне так удобнее. если это не криминал, я бы не удаляла

export const getRandomInteger = (max, min = 1) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

export const runGameEngine = (gameRule, getQuestion, getCorrectAnswer) => {

  const maxRoundCount = 3;
  let roundCount = 0

  log('Welcome to the Brain Games!');
  const name = askName();
  log(gameRule);

  for (; roundCount < maxRoundCount; roundCount += 1) {
    
    const question = getQuestion();
    log(`Question: ${question}`);

    const userAnswer = readlineSync.question(`Your answer: `);
    const correctAnswer = getCorrectAnswer(question);

    const userVictory = userAnswer === correctAnswer;

    if (userVictory === false) {
      log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      log(`Let's try again, ${name}!`);
      break;
    }

    log('Correct!');

  }

  if (roundCount === 3) {
    log(`Congratulations, ${name}`);
  }
};