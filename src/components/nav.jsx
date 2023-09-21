import React, { useState } from 'react'



export const NavBar= (props) => {
    const[classs,setclass]=useState("");
    const clickfunction=()=>{
        setclass("h-[80px] ")
    }
  return(
    <div id="nav" class="h-[50px]  w-screen flex justify-between bg-black fixed top-0">
        <button>logo</button>
        <button>menu</button>
    </div>
   )
  }
