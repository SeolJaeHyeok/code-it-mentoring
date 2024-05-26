import React from 'react';

import ChildComponent from './components/child-component';
import axios from 'axios';
// import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
// import getQueryClient from '../helpers/get-query-client';

const getTodos = async () => {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, { cache: 'force-cache' });
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await response.json();
  return response.data;
};

async function Page() {
  const data = await getTodos();
  console.log('data', data);

  // console.log('data', data);
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ['todos-server'],
  //   queryFn: async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  //     const data = await response.json();
  //     return data;
  //   },
  // });

  // const dehydratedState = dehydrate(queryClient);
  return (
    <div>
      {/* <HydrationBoundary state={dehydratedState}> */}
      <ChildComponent data={data} />
      {/* </HydrationBoundary> */}
    </div>
  );
}

export default Page;
