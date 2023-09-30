import React from 'react'
import "./style.css"

import 'animate.css';
import Typewriter from "typewriter-effect";
import { Socials } from './footer';


 const Landing = (props) => {
  
  return(
    <div id="landing" class=" flex justify-center items-center flex-col rounded-b-8xl  w-full bg-gray-50 h-screen ">
      <div id="top" class="flex justify-center items-start md:items-center flex-col h-96 p-6 ">
    
              <span class="animate__animated animate__backInLeft text-5xl  font-extrabold md:text-4xl">HEY, I'M NIKHIL LENDE</span>
              <div class="animate__animated animate__backInRight  text-2xl md:text-3xl text-blue-700 font-bold mt-2 w-full flex  items-start md:justify-center   ">
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
                                .typeString("FULLSTACK DEVELOPER")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("WEB DESIGNER")
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }}
                        />
              </div>
              <p class="text-gray-500 mt-3 animate__animated animate__fadeInUp flex flex-wrap  w-[340px] ">
                A dedicated full-stack developer with proficient knowledge in the MERN stack.</p>
<div className="text-white flex ">

                  <button class="px-5 py-2 flex justify-center items-center rounded-full bg-blue-700 mt-4 md:m-4 font-bold">
                  <a class="m-1" href='pdf/NikhilLende.pdf' download="NikhilLende.pdf">Get My Resume</a></button>
</div>

              </div>
    
    

     
    </div>
   )

 }
 export default Landing;