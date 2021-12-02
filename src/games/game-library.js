import readlineSync from 'readline-sync';

export const { log } = console;
export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
export const printQuestion = (question) => log(`Question: ${question}`);
export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getRandomInteger = (integerLimit) => Math.floor(Math.random() * integerLimit);
