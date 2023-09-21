import React from 'react'
import "./style.css"

import 'animate.css';
import Typewriter from "typewriter-effect";


 const Landing = (props) => {
  
  return(
    <div id="landing-page" class=" flex justify-center items-center flex-col rounded-b-8xl  w-full bg-gray-100 h-[800px] ">
      <div id="top" class="flex justify-center items-center flex-col h-96 p-10 ">
    
              <span class="animate__animated animate__backInLeft text-3xl  font-extrabold md:text-4xl">HEY, I'M NIKHIL LENDE</span>
              <div class="animate__animated animate__backInRight  text-2xl md:text-3xl text-blue-700 font-bold mt-2 w-full flex justify-center items-center">
                          <Typewriter
                          options={{
                            loop: true, // Enable infinite loop
                          }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("REACT JS DEVLOPER")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("ANDROID DEVLOPER")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("FULLSTACK DEVLOPER")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("WEB DESIGNER")
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }}
                        />
              </div>
              <p class="text-gray-500 mt-3 animate__animated animate__fadeInUp flex flex-wrap  w-[340px] p-2">
                A dedicated full-stack developer with proficient knowledge in the MERN stack.</p>
<div className="text-white flex ">

                  <button class="px-5 py-2 flex justify-center items-center rounded-full bg-blue-700 m-4">
                  Contact Me</button>
</div>
                
              </div>
    
     <div id="image" class="w-full  flex justify-center items-center  ">
         <img src="images/bg.png" class="  w-[600px]  h-[300px] md:h-[400px] " />
     </div>
    </div>
   )

 }
 export default Landing;