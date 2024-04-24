'use client'

import { useEffect, useState } from "react";

export default function Quiz({params}: {params: {id: string}}) {
  
  return <div>
    {params.id === '1' && <Quiz1 />}
  </div>
}


const UseStateTest3 = ({num}: {num: number}) => {
  const [draft, setDraft] = useState<number>();

  const pNum = draft ?? num;

  console.log('h', pNum);


  return <div></div>
}

// const UseStateTest2 = ({num}: {num: number}) => {
//   const [state, setState] = useState(num);
  
//   useEffect(() => {
//     setState(num);
//   }, [num]);

//   console.log('g', state)
//   return <div></div>
// }

// const UseStateTest1 = ({num}: {num: number})  =>{
//     const [state, setState] = useState(num);

//     console.log('f', state);
//     return <div></div>;
// }


const Quiz1 = () => {
  const [state, setState] = useState(0);

    console.log('a', state);

    useEffect(() => {
        setState((prev) => prev + 1);
        console.log('b', state);
        setState((prev) => prev + 1);

        console.log('c', state);
        setState((prev) => prev + 1);

        console.log('d', state);
    }, []);

    console.log('e', state)
    return (
        <div>
            {/* <UseStateTest1 num={state} /> */}
            {/* <UseStateTest2 num={state} /> */}
            <UseStateTest3 num={state} />
            <button onClick={() => setState((prev) => prev + 1)}>클릭</button>
        </div>
    );
}

// console.log('z')

// const UseStateTest1 = ({num}: {num: number})  =>{
//     const [state, setState] = useState(num);

//     console.log('f');
//     return <div></div>;
// }

// const Quiz1 = () => {
//   const [state, setState] = useState(0);

//     console.log('a');

//     useEffect(() => {
//         setState((prev) => prev + 1);
//         console.log('b');
//         setState((prev) => prev + 1);

//         console.log('c');
//         setState((prev) => prev + 1);

//         console.log('d');
//     }, []);


//     console.log('e')

//     return (
//         <div>
//             <UseStateTest1 num={state} />
//             <button onClick={() => setState((prev) => prev + 1)}>클릭</button>
//         </div>
//     );
// }