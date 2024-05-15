import { useEffect, useState } from 'react';
import { todosApi } from './api-example';

export default function useFetchData<T>() {
  const [data, setData] = useState<T>();

  const fetchData = async () => {
    const response = await todosApi.getTodos<T>();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}
