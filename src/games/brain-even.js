import runGreeting from '../../bin/brain-games';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const getRandomInteger = () => (Math.floor(Math.random() * 50));
const isIntegerEven = (integer) => integer % 2 ? true : false;

const startBrainEven = () => {

  const printCongrats = () => console.log(`Congratulations, ${name}!`);
  let playedRoundCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  playedRoundCount === 3 ? printCongrats() : startRound();

    const startRound = () => {
      const integer = getRandomInteger();
      const correctAnswer = isIntegerEven(integer) ? 'yes' : 'no';
      console.log(`Question: ${integer}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        playedRoundCount += 1;
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
        console.log(`Let's try again, ${name}`);
      };
    };
  };
};

export default startBrainEven;