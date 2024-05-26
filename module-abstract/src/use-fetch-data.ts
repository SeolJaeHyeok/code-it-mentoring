import { useEffect, useState } from 'react';

export default function useFetchData() {
  const [data, setData] = useState();

  const fetchData = async () => {
    // const result = httpClient1.get('/todos');
    // console.log('result', result);
    // setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
