import React from 'react'

import 'font-awesome/css/font-awesome.min.css';

export const Footer = (props) => {
  return(
    <div id="contact" class=" w-full flex justify-center items-start flex-col p-8 bg-black md:flex-row">
     
     

    <div class="text-white flex flex-col m-5" >
    <h1 class="text-white font-bold text-3xl my-4">Socials</h1>
            <span> <i class="fa fa-instagram  mr-2"/>mr_unick</span>
            <span><i class="fa fa-linkedin mr-2"/>Nikhil Lende</span>
           <a href='https://github.com/Mr-unick' class="text"> <i class="fab fa-github mr-2"> Mr_Unick</i></a>

    </div>
   

   <div class="text-white flex flex-col m-5" >
   <h1 class="text-white font-bold text-3xl my-4">Contact</h1> 
        <span ><i class="fa fa-envelope  mr-2"/>7448080267</span>
        <span ><i class="fa fa-phone mr-2 "/>nikhillende9121@gmail.com</span>
   </div>
     
   
      </div>
   )

 }