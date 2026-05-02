import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [selectedUserId,setSelectedUserId]=useState(null);


    const getUserData = async() =>{
       try {
        setLoading(true);

         const response = await fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});
        const data = await response.json();
        const getFirstFive = data.slice(0,5);
        // console.log(getFirstFive)
        setData(getFirstFive);
        
       } catch (error) {
        console.error(error);
        console.error("Error in fetching users")
       }finally{
        setLoading(false);
       }
    }

    useEffect(()=>{
    console.log("data is:",data)
    },[data])

    useEffect(()=>{
        getUserData();
    },[])

    const handleClick = (e)=>{
        const userId = e.target.dataset.userId;
        if(!userId) return; // click outside li
        setSelectedUserId(Number(userId))
    } 

  return (
    <div>
        {/* <div>Get User data:</div>
        <button onClick={getUserData}>Fetch</button> */}

          <div>User data :</div>
          {loading && <p>Loading...</p>}
          {!loading && (
              <div>
                  <ul onClick={handleClick}>
                      {data.map(user => (
                          <li
                              key={user.id}
                              data-user-id={user.id}
                              className={`flex justify-start items-center h-8 cursor-pointer ${selectedUserId === user.id ? "text-red-400" : ""
                                  }`}
                          >
                              {user.name}
                          </li>
                      ))}
                  </ul>

              </div>
          )}

      </div>
  )
}

export default UserList



//   const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer your_token_here"
//     },
//     body: JSON.stringify({
//       name: "John Doe",
//       email: "john@example.com"
//     })
//   });