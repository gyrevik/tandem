import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import { Toggle } from './Toggle';

function Main() {
  const [data, setData] = useState([0]);
  const [dataCategory, setDataCategory] = useState('1234');

  function toggleClickHandler() {
    setDataCategory((dataCategory === '1234') ? '4321' : '1234')
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/${dataCategory}`);
      setData(response.data.data);
    }
    
    fetchData();
  }, [dataCategory]);

  return (
    <div>
      <p>mean: {mean(data)}</p>
      <p>median: {median(data)}</p>
      <p>standard deviation: {standard_deviation(data)}</p>
      <p>mode: {mode(data)}</p>
      
      <Toggle ClickHandler={toggleClickHandler} />
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

function mode(numbers: Array<number>) {
  // as result can be bimodal or multi-modal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [], count: Array<number> = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
      number = numbers[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
              modes.push(Number(i));
          }
      }

  return modes;
}

function standard_deviation(array: Array<number>) {
  var avg = _.sum(array) / array.length;
  return Math.sqrt(_.sum(_.map(array, (i) => Math.pow((i - avg), 2))) / array.length);
};