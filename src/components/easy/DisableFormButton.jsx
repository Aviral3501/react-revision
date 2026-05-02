import React, { useState } from 'react'

const DisableFormButton = () => {

  // step 1 all input states 

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword]=useState(false);
  const [age, setAge] = useState(0);

  // step 2 validation if input states 

  const isNameValid = username.length > 3 ? true : false;
  const isEmailValid = email.includes("@");
  const isAgeValid = age > 0 && age < 150;
  const isPasswordValid = password.length > 5;

  const isFormValid = () => {
    console.log("Name" + isNameValid + "email" + isEmailValid + "age" + isAgeValid + "pass" + isPasswordValid);
    return (isNameValid && isEmailValid && isAgeValid && isPasswordValid);
  }


  // step 3 submission of form 
  const handleSubmit = (e) => {

    e.preventDefault();

    // validate inputs 

    if (!isFormValid()) return;

    // submit the form

    console.log("form submitted", username, age, email);
  }


  return (
    <div className='flex'>
      <form onSubmit={handleSubmit} className='flex-col'>


       <div className='flex'>
         <p className='w-[100px] text-center'>Username:</p>
        <input
          type='text'
          aria-label='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
       </div>

       <div className='flex'>
          <p className='w-[100px] text-center'>Email</p>
        <input
          type='email'
          aria-label='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
       </div>

       <div className='flex'>
          <p className='w-[100px] text-center'>Password</p>
           <input
          type={`${showPassword?"text":"password"}`}
          aria-label='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button  className='w-[80px] ml-5'
        onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?"Hide":"Show"}
        </button>
       </div>


       <div className='flex'>
         <p className='w-[100px] text-center'>Age</p>
        <input
          type='number'
          aria-label='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
       </div>

      
      <button type='submit' className='disabled:cursor-not-allowed' disabled={!isFormValid()}>
        Submit
      </button>

      </form>



    </div>
  )
}

export default DisableFormButton









































// import React, { useState } from "react";

// const MultiInputForm = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [company, setCompany] = useState("");
//   const [email, setEmail] = useState("");

//   // field-level validation (derived)
//   const isNameValid = name.length >= 3;
//   const isPasswordValid = password.length >= 5;
//   const isCompanyValid = company.length >= 4;
//   const isEmailValid = email.includes("@");

//   // form-level validation (simple function)
//   const isFormValid = () => {
//     return (
//       isNameValid &&
//       isPasswordValid &&
//       isCompanyValid &&
//       isEmailValid
//     );
//   };

//   const handleSubmit = (e) => {
//     console.log("dd")
//     e.preventDefault();

//     if (!isFormValid()) return;

//     console.log("Form submitted:", {
//       name,
//       password,
//       company,
//       email
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <input
//         placeholder="Company"
//         value={company}
//         onChange={(e) => setCompany(e.target.value)}
//       />

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <button type="submit" disabled={!isFormValid()}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default MultiInputForm;
