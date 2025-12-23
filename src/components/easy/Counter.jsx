import React, {useState} from 'react'
const Counter = () => {

    const [count,setCount] = useState(0);

    const inc = () =>{
        setCount( (prev) => {
            return prev+1;
        })

    }

    const dec = ()=>{
        if(count === 0) {
            window.alert("cannot be negative")
            return;
        }
        setCount( (prev)=> {
            return Math.max( 0 , prev-1)
        })
    }

  return (
    <div className=''>
        <div>Count : {count}</div>
        <div className='flex space-x-2  '>
            <span>
                <button 
                className='w-12 h-12'
                onClick={inc}>+</button>
            </span>
            <span>
                <button 
                className='w-12 h-12'
                onClick={dec}>-</button>
            </span>
        </div>
    </div>
  )
}

export default Counter
