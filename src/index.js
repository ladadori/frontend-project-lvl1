import readlineSync from 'readline-sync';

export const { log } = console;
export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
export const printQuestion = (question) => log(`Question: ${question}`);
export const getUserAnswer = () => readlineSync.question('Your answer: ');
export const getRandomInteger = (integerLimit) => Math.floor(Math.random() * integerLimit);
export const printSorry = (name, userAnswer, correctAnswer) => {
  log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  log(`Let's try again, ${name}`);
};