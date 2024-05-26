
const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
  
  const data = await response.json();
  console.log('자식')
  return data;
};

export default async function ChildComponent() {
  const data = await getData();

  return <div style={{width: '500px', height: '500px', background: 'yellow'}}>
      {data.title}
    </div>
}
