import React , {useState,useRef} from "react";

const ThrottledButton = () => {

    const [count,setCount] = useState(0);
    const [loading,setLoading]= useState(false);
    const refButton = useRef(0);


    const handleButtonClick =async()=>{
        if(refButton.current) return; //hard return
        setLoading(true)

        setCount((prev)=>prev+1);
        refButton.current = true;

        try {
            const result = await new Promise((res)=>setTimeout(res,3000));
            console.log(result)
            
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
            refButton.current=false;

        }
        
    }


    return(
        <>
        <button type="submit" onClick={handleButtonClick}> 
            Expensive Button
        </button>
        <p>Count :{count}</p>

        {loading && <p>
            loading....</p>}
        </>
    )

}

export default ThrottledButton;