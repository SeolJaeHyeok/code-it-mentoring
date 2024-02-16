import { useEffect, useState } from 'react';
import HttpClient from './apis';

export default function useFetchData() {
  const httpClient = new HttpClient('https://jsonplaceholder.typicode.com');
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await httpClient.get('/todos');
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
