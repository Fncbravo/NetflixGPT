import React, { useState, useRef } from 'react'
import Header from './Header' 
import { checkValidData } from "../utils/validate.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
      // Validate the form data
     const message = checkValidData(email.current.value, password.current.value)
     setErrorMessage(message); 
     if(message) return;

    if(!isSignInForm) {
        // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ) 
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage)
        // ...
      });
    } else {
        // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage);
      });
    }
    
    };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
         className='w-screen h-screen object-cover'
         src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" 
         alt='background-img'
         />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
        <input 
        type="text" 
        placeholder='Full Name' 
        className='p-2 my-4 w-full bg-gray-700'
        />
        )}
        <input 
        ref={email}
        type="text" 
        placeholder='Email Address' 
        className='p-2 my-4 w-full bg-gray-700'
        />
        
        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button onClick={handleButtonClick}
        className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm 
          ? "New to Netflix? Sign Up now" 
          : "Already registered? Sign In now"}
          </p>
      </form>
    </div>
  )
}

export default Login;