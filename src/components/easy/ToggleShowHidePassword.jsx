import React, { useState } from 'react'

const ToggleShowHidePassword = () => {
    const [password,setPassword]=useState("");
    const [visible,setVisible] = useState(false);


    const handleClick = ()=>{
        setVisible((prev)=> {
            return !prev
        })
    }


  return (
    <div className='w-full'>
        <div className='w-[30%] flex'>Password </div>
       <div className='flex'>
         <input 
        type={`${visible?"text":"password"}`}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />
         <div>
            <button
            onClick={handleClick}>{visible?"Hide":"Show"}</button>
         </div>
       </div>

    </div>
  )
}

export default ToggleShowHidePassword
