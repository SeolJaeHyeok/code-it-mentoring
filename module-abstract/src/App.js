import React from 'react';
import './App.css';
import useFetchData from './use-fetch-data';

function App() {
  const { data } = useFetchData();

  console.log('data', data);
  return <div></div>;
}

export default App;
