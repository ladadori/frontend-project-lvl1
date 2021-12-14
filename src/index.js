import readlineSync from 'readline-sync';

export const getRandomInteger = (min = 1, max = 100) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

export const runGameEngine = (gameRule, getRoundData) => {
  const maxWonRoundCount = 3;

  const printGreeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };

  const printSorry = (userAnswer, correctAnswer, name) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  };

  const name = printGreeting();

  console.log(gameRule);

  // если этот цикл — тоже плохая логика, то мне нужна подсказка :(
  for (let wonRoundCount = 0; wonRoundCount < maxWonRoundCount; wonRoundCount += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userVictory = userAnswer === correctAnswer;
    if (userVictory === false) {
      return printSorry(userAnswer, correctAnswer, name);
    }
    if (wonRoundCount === 2) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log('Correct!');
    }
  }
  return 'fuck consistent-return rule';
};
