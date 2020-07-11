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
        Hello {name + getExclamationMarks(enthusiasmLevel)}
        data: {data_1234.data[1]}
      </div>
    </div>
  );
}

export default Main;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

const data_1234_mean = Array(data_1234.data).reduce(function(a, b){ return a + b; 0 }) / Array(data_1234.data).length; 

function mean(arr: Array<number>) {
  return arr.reduce(function(a, b){ return a + b; 0 }) / arr.length; 
}

function median(numChars: number) {
  return Array(numChars + 1).join('!');
}

function standard_deviation(numChars: number) {
  return Array(numChars + 1).join('!');
}

function mode(numChars: number) {
  return Array(numChars + 1).join('!');
}