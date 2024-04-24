import { useEffect, useState } from 'react';
import HttpClient from './apis/class';
import createHttpClient from './apis/func';

export default function useFetchData() {
  const httpClient = new HttpClient();
  // const httpClient = createHttpClient('https://jsonplaceholder.typicode.com');
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
