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
  const [dataSource, setDataSource] = useState(config.data_source_1);
  const [endPoint, setEndPoint] = useState(config.end_point_1);
  const [inputValue, setInputValue] = useState<string>(config.default_add);

  function toggleClickHandler() {
    setDataSource((dataSource === config.data_source_1) ? config.data_source_2 : config.data_source_1)
    switch (dataSource) {
      case config.data_source_1: {
        setDataSource(config.data_source_2);
        setEndPoint(config.end_point_2);
        break;
      }
      case config.data_source_2: {
        setDataSource(config.data_source_1);
        setEndPoint(config.end_point_1);
        break;
      }
    }
  }

  function addClickHandler() {
    if (trim(inputValue) === '') return;
    data.push(Number(inputValue));
    setData([...data]);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.tandem_server_path}${endPoint}`);
      setData(response.data.data);
    }
    
    fetchData();
  }, [endPoint]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('handleChange:', e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <p />
      {dataSource}

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