import readlineSync from 'readline-sync';

export const getRandomInteger = (max = 100, min = 1) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

export const runGameEngine = (gameRule, getQuestion, getCorrectAnswer) => {
  const maxRoundCount = 3;
  let roundCount = 0;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.console.log(`Hello, ${name}!`);

  console.log(gameRule);

  for (; roundCount < maxRoundCount; roundCount += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

    const userVictory = userAnswer === correctAnswer;

    if (userVictory === false) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
  }

  if (roundCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
