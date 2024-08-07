import { useState } from "react";
import Header from "./Header";
const Login =()=>{

  const [isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignInForm =()=>{

setIsSignInForm(!isSignInForm);

  }

  return (

<div>
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg
" alt="logo"/>
    </div>
    
  <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80">
     <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
     
     {!isSignInForm && (<input type="text" placeholder="Name" 
     className="p-4 my-4 w-full  bg-gray-700 "></input>)
  }

     <input type="text" placeholder="Email Address" 
     className="p-4 my-4 w-full  bg-gray-700 "></input>
     
     <input type="password" placeholder="Password" 
     className="p-4 my-4 w-full bg-gray-700"></input>

     <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
  <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
  </form>
</div>



) 

}

export default Login;