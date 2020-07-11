import * as React from 'react';
var data_1234 = require('../data/data-1234.json');

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Main({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        <p>mean: {mean(data_1234.data)}</p>
        <p>median: {median(data_1234.data)}</p>
        <p>mean: {mean(data_1234.data)}</p>
        <p>mean: {mean(data_1234.data)}</p>
      </div>
    </div>
  );
}

export default Main;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function mean(arr: Array<number>) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
}

function median(arr: Array<number>) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function standard_deviation(numChars: number) {
  return Array(numChars + 1).join('!');
}

function mode(numChars: number) {
  return Array(numChars + 1).join('!');
}