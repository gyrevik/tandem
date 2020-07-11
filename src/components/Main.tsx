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

function standardDeviation(values: Array<number>){
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data: Array<number>){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}