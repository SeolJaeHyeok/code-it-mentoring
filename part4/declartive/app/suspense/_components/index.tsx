import React, { Suspense } from 'react';
import ChildChildComponent from './child-child-component';

const getTodos = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {cache: 'no-cache'});

  const data = await response.json();
  console.log('자식 컴포넌트')
  return data;
};


async function Component() {
  const data = await getTodos();
  return (
    <div style={{color: 'white'}}>
      {data.map((d: any) => <div key={d.userId}>{d.title}</div>)}
      <Suspense fallback={<div>ChildChild Loading...</div>}>
        <ChildChildComponent />
      </Suspense>
    </div>
  );
}

export default Component;