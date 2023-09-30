import React from 'react'

import 'font-awesome/css/font-awesome.min.css';



export const Socials=()=>{
  return(
    <div class="text-white flex flex-col m-5 dark:text-gray-300" >
    <h1 class="text-white font-bold text-3xl my-4">Socials</h1>
            <span class="cursor-pointer"> <a href='https://www.linkedin.com/in/nikhil-lende-148687244' > </a>
            <i class="fa fa-instagram  mr-2"/>mr_unick</span>
            <span class="cursor-pointer"><a href='https://www.linkedin.com/in/nikhil-lende-148687244' > 
            <i class="fa fa-linkedin mr-2"/>Nikhil Lende</a></span>
            
            <div ><a href='https://github.com/Mr-unick'class="cursor-pointer flex flex-row " > 
            <i><img src='git.svg' class="bg-white rounded-full h-4 w-4 mt-1 mr-1"/></i>Mr unick</a></div>
           
    </div>
  )
}




export const Footer = (props) => {
  return(
    <div id="contact" class=" w-full flex justify-center items-start flex-col p-8 bg-black md:flex-row">
     
     
<Socials/>
    
   

   <div class="text-white flex flex-col m-5" >
   <h1 class="text-white font-bold text-3xl my-4">Contact</h1> 
        <span ><i class="fa fa-envelope  mr-2"/>7448080267</span>
        <span ><i class="fa fa-phone mr-2 "/>nikhillende9121@gmail.com</span>
   </div>
     
   
      </div>
   )

 }