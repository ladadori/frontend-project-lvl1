import readlineSync from 'readline-sync';

export const log = console.log;
export const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
export const printQuestion = (question) => log(`Question: ${question}`);
export const userAnswer = readlineSync.question('Your answer: ');