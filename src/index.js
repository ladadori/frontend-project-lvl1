import readlineSync from 'readline-sync';

export const getRandomInteger = (min = 1, max = 100) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

export const runGameEngine = (gameRule, getRoundData) => {
  const maxRoundCount = 3;
  let roundCount = 0; // если убрать в цикл, то непонятно, как
  // проверить, что игрок выиграл три раунда (см. стр. ...)

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRule);

  for (; roundCount < maxRoundCount; roundCount += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
