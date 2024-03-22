import React from 'react';
import './App.css';
import useFetchData from './use-fetch-data';
import Example from './example';

function App() {
  const { data } = useFetchData();

  console.log(data);

  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <Example />
    </div>
  );
}

export default App;
