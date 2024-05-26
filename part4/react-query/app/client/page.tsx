'use client';

import { useQuery } from '@tanstack/react-query';
import ChildComponent from './components/child-component';
import { useEffect, useState } from 'react';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['todos-client'],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`, {
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
