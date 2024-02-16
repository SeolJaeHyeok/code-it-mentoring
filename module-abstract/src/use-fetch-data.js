import { useEffect, useState } from 'react';

export default function useFetchData() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
