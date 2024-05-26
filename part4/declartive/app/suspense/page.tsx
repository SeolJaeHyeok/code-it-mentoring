import React, { Suspense } from 'react';
import Component from './_components';

const getTodos = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {cache: 'no-cache'});

  const data = await response.json();
  console.log('부모')
  return data;
};

async function Page() {
  const data = await getTodos();


  return (
    <div>
      <button>{data.title}</button>
      <Suspense fallback={<div>Component Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}

export default Page;
