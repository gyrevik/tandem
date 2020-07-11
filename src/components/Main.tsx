import * as React from 'react';
import * as _ from "lodash";
var data_1234 = require('../data/data-1234.json');

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Main() {
  return (
    <div>
      <p>mean: {mean(data_1234.data)}</p>
      <p>median: {median(data_1234.data)}</p>
      <p>standard deviation: {standard_deviation(data_1234.data)}</p>
      <p>mean: {mean(data_1234.data)}</p>
    </div>
  );
}

export default Main;

// helpers
function mean(arr: Array<number>) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue) / arr.length;
}

function median(arr: Array<number>) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function mode(numChars: number) {
  return Array(numChars + 1).join('!');
}

function standard_deviation(array: Array<number>) {
  var avg = _.sum(array) / array.length;
  return Math.sqrt(_.sum(_.map(array, (i) => Math.pow((i - avg), 2))) / array.length);
};