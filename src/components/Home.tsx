import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import config from '../config.json';
import { mean, median, standard_deviation_2, mode } from '../util/util';
import { TextField } from '@material-ui/core';
import { MyButton } from './MyButton';
import SimpleTable from './Table';
import { trim } from 'lodash';

function Home() {
  const [data, setData] = useState([0]);
  const [dataCategory, setDataCategory] = useState('1234');
  const [inputValue, setInputValue] = useState<string>("");

  function toggleClickHandler() {
    setDataCategory((dataCategory === '1234') ? '4321' : '1234')
  }

  function addClickHandler() {
    console.log('addClickHandler inputValue:', inputValue);
    if (trim(inputValue) === '') return;
    data.push(Number(inputValue));
    setData([...data]);
    console.log('data:', data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.tandem_server_path}${dataCategory}`);
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
      <p />
      {`data-${dataCategory}.json`}

      <SimpleTable 
        mean={String(mean(data).toFixed(6))} 
        median={String(median(data).toFixed(6))} 
        standardDeviation={String(standard_deviation_2(data).toFixed(6))} 
        mode={String(mode(data)[0].toFixed(6))} 
      />

      <p />
      <MyButton ClickHandler={toggleClickHandler} message={'Change Data Set'} />
      <p />
      
      <TextField value={inputValue} onChange={handleChange} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <MyButton ClickHandler={addClickHandler} message={'Add'} />
    </div>
  );
}

export default Home;