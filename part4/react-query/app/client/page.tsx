'use client';

import { useQuery } from '@tanstack/react-query';
import ChildComponent from './components/child-component';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['todos-client'],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data = await response.json();
      return data;
    },
  });

  return (
    <div>
      <ChildComponent todos={data} />
    </div>
  );
}
