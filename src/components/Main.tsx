import React, { useState, useEffect } from 'react';
import '../App.css';
import * as _ from 'lodash';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { MyButton } from './MyButton';
import Tile from './Tile';
import { trim } from 'lodash';

function Main() {
  const [data, setData] = useState([0]);
  const [dataCategory, setDataCategory] = useState('1234');
  const [inputValue, setInputValue] = useState<string>("");

  function handleInput(ev: React.ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    setInputValue(ev.target.value)
  }

  function toggleClickHandler() {
    setDataCategory((dataCategory === '1234') ? '4321' : '1234')
  }

  function addClickHandler() {
    console.log('addClickHandler inputValue:', inputValue);
    if (trim(inputValue) == '') return;
    data.push(Number(inputValue));
    setData([...data]);
    console.log('data:', data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/${dataCategory}`);
      setData(response.data.data);
    }
    
    fetchData();
  }, [dataCategory]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('handleChange:', e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <Tile label='mean' value={String(mean(data).toFixed(6))} />
      <Tile label='median' value={String(median(data).toFixed(6))} />
      <Tile label='standard deviation' value={String(standard_deviation_2(data).toFixed(6))} />
      <Tile label='mode' value={String(mode(data)[0].toFixed(6))} />
      <p />
      <MyButton ClickHandler={toggleClickHandler} message={'Change Data Set'} />
      <p />
      
      <TextField value={inputValue} onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <MyButton ClickHandler={addClickHandler} message={'Add'} />
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

function standard_deviation_2(array: Array<number>) {
  const n = array.length;
  const mean = array.reduce((a,b) => a+b)/n;
  const s = Math.sqrt(array.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/n);
  return s;
}