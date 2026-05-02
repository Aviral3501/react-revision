import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    const inc = () =>{
        setCount((prev)=>prev+1);
    }

    const dec =()=>{
        setCount((prev)=>Math.max(prev-1,0))
    }

    const reset= ()=>{
        setCount(0);
    }

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex-row'>
             <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </div>

        <div className='w-full text-center'>{count}</div>

        <button onClick={reset}>Reset</button>
      
    </div>
  )
}

export default Counter










































// import React, {useState} from 'react'
// const Counter = () => {

//     const [count,setCount] = useState(0);

//     const inc = () =>{
//         setCount( (prev) => {
//             return prev+1;
//         })

//     }

//     const dec = ()=>{
//         if(count === 0) {
//             window.alert("cannot be negative")
//             return;
//         }
//         setCount( (prev)=> {
//             return Math.max( 0 , prev-1)
//         })
//     }

//   return (
//     <div className=''>
//         <div>Count : {count}</div>
//         <div className='flex space-x-2  '>
//             <span>
//                 <button 
//                 className='w-12 h-12'
//                 onClick={inc}>+</button>
//             </span>
//             <span>
//                 <button 
//                 className='w-12 h-12'
//                 onClick={dec}>-</button>
//             </span>
//         </div>
//     </div>
//   )
// }

// export default Counter
