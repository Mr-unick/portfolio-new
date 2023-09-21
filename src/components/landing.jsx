import React from 'react'
import "./style.css"
import Text from './text';
import 'animate.css';

 const Landing = (props) => {
  
  return(
    <div id="landing-page" class=" flex justify-center items-center flex-col rounded-b-8xl mt-8 w-full">
      <div id="top" class="flex justify-center items-center flex-col h-1/2 ">
    
      <span class="animate__animated animate__backInLeft text-4xl font-extrabold">HEY, I'M NIKHIL LENDE</span>
     <div class="animate__animated animate__backInRight px-4"> <Text /></div>
     <span class="text-gray-500 mt-5 animate__animated animate__fadeInUp flex flex-wrap">A dedicated full-stack developer with proficient knowledge in the MERN stack.</span></div>
    
     <div id="image" class="w-full  flex justify-center items-center  ">
     <img src="images/bg.png" class="  w-[500px] h-[400px]  " />
     </div>
    </div>
   )

 }
 export default Landing;