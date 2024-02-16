import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('data', data);
  return <div></div>;
}

export default App;
