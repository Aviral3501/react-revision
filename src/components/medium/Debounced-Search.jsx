import React, { useEffect, useState } from 'react'

const DebouncedSearch = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [debouncedQuery,setDebouncedQuery]= useState(searchQuery);
    const MIN_LENGTH = 5



    const handleClickSearchButton = async(debouncedQuery)=>{
        console.log("Query searched :",debouncedQuery);
    }

    //  when search query changes --> updated the deounce query (with some delay after input)

    useEffect(()=>{

        const handler = setTimeout(()=>{
            setDebouncedQuery(searchQuery)
        },800)

        return ()=>clearTimeout(handler);

    },[searchQuery])

    // when debounce query changes make the api call


  useEffect(() => {
    if (!debouncedQuery) {
      return;
    }
    if(debouncedQuery.length >=MIN_LENGTH){
        handleClickSearchButton(debouncedQuery)
    }
  }, [debouncedQuery]);

    // ✅ derive message in render (correct place)
  const message =
    debouncedQuery && debouncedQuery.length < MIN_LENGTH
      ? `Type at least ${MIN_LENGTH} characters to search`
      : "";



  return (
    <div>

        <input
         type='text'
         value={searchQuery}
         onChange={(e)=>setSearchQuery(e.target.value)}
         /> 

         <button type='button' onClick={()=>handleClickSearchButton(debouncedQuery)}>Search</button>

        {message && (
            <p>{message}</p>
        )}
        
    </div>
  )
}

export default DebouncedSearch
