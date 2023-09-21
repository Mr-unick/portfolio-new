import React from 'react'
import "./style.css"
import Text from './text';
import 'animate.css';
import Typewriter from "typewriter-effect";


 const Landing = (props) => {
  
  return(
    <div id="landing-page" class=" flex justify-center items-center flex-col rounded-b-8xl  w-full bg-gray-100  ">
      <div id="top" class="flex justify-center items-center flex-col   ">
    
              <span class="animate__animated animate__backInLeft text-2xl font-extrabold md:text-4xl">HEY, I'M NIKHIL LENDE</span>
              <div class="animate__animated animate__backInRight px-4 text-3xl text-blue-700 font-bold mt-2">
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
              <p class="text-gray-500 mt-3 animate__animated animate__fadeInUp flex flex-wrap  w-[340px] p-2">A dedicated full-stack developer with proficient knowledge in the MERN stack.</p>
              </div>
    
     <div id="image" class="w-full  flex justify-center items-center  ">
         <img src="images/bg.png" class="  w-[600px]  h-[300px] md:h-[400px] " />
     </div>
    </div>
   )

 }
 export default Landing;