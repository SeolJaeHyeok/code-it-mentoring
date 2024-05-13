import { useQuery } from '@tanstack/react-query';
import React from 'react';

export type Props = {
  todos?: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

function ChildComponent({ todos }: Props) {
  const { data } = useQuery({
    queryKey: ['todos-client'],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data = await response.json();
      return data;
    },
  });

  console.log('client data', data);
  return <div></div>;
}

export default ChildComponent;
