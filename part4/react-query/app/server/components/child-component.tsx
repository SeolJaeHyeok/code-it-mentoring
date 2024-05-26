'use client';

import { Props } from '@/app/client/components/child-component';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

function ChildComponent({ data }: { data: any }) {
  // const { data } = useQuery({
  //   queryKey: ['todos-server'],
  //   queryFn: async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  //     const data = await response.json();
  //     return data;
  //   },
  //   select: (data) => {
  //     return { completed: data.completed, id: data.id, title: data.title };
  //   },
  // });

  return <div>{data.userId}</div>;
}

export default ChildComponent;
