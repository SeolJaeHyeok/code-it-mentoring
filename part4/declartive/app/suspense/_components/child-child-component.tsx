import React from 'react';


const getTodos = async () => {
  await new Promise(resolve => setTimeout(resolve, 10000));
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {cache: 'no-cache'});

  const data = await response.json();
  console.log('자식의 자식 컴포넌트')
  return data;
};

async function ChildChildComponent() {
  const data = await getTodos();
  return (
    <div style={{color: 'blue'}}>
      {data.map((d: any) => <div key={d.userId}>{d.title}</div>)}
    </div>
  );
}

export default ChildChildComponent;