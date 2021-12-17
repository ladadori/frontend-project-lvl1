const generateRandomInteger = (min = 1, max = 100) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};

export default generateRandomInteger;
