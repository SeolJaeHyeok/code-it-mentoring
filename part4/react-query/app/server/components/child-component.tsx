'use client';

import { Props } from '@/app/client/components/child-component';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

function ChildComponent() {
  const { data } = useQuery({
    queryKey: ['todos-server'],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const data = await response.json();
      return data;
    },
  });
  console.log('server data', data);

  return <div></div>;
}

export default ChildComponent;
