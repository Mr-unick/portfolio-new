import React, { useState } from 'react'



export const NavBar= (props) => {
    const[classs,setclass]=useState("");
    const clickfunction=()=>{
        setclass("h-[80px] ")
    }
  return(
    <div id="nav" class="h-[50px]  w-fullbackdrop-blur-lg w-full  bg-opacity-50 bg-white absolute top-0 left-0 flex justify-between">
        <button>logo</button>
        <button>menu</button>
    </div>
   )
  }
