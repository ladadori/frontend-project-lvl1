import readlineSync from 'readline-sync';

const runGameEngine = (gameRule, getRoundData) => {
  const maxRoundCount = 3;

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

  for (let roundCount = 0; roundCount < maxRoundCount; roundCount += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userVictory = userAnswer === correctAnswer;
    if (userVictory === false) {
      return printSorry(userAnswer, correctAnswer, name);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return 'fuck consistent-return rule';
};

export default runGameEngine;
