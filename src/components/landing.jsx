import React from 'react'
import "./style.css"

import 'animate.css';
import Typewriter from "typewriter-effect";
import { Socials } from './footer';
import { Parallax } from 'react-parallax';

 const Landing = (props) => {
  
  return(
    <Parallax
       
        bgImage="./bg.svg"
        bgImageAlt="Background Image"
        strength={400}
        style={{
          height: '100vh',
          backgroundSize: 'contain', 
          backgroundAttachment: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    
    <div  class=" flex justify-center items-center md:items-center flex-col dark:bg-black dark:bg-opacity-50 h-screen w-screen">
    <p class="animate__animated animate__backInLeft text-4xl font-bold md:text-5xl dark:text-white text-white md:my-2 font-[Teko', sans-serif]">HEY, I'M NIKHIL LENDE</p>
    <div class="animate__animated animate__backInRight  text-2xl md:text-3xl text-gray-200 font-extrabold mt-2 w-full flex  items-start md:justify-center   ">
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
    <p class="text-gray-200 mt-3 animate__animated animate__fadeInUp flex flex-wrap  w-[340px] dark:text-gray-400 text-center md:my-4">
      A dedicated full-stack developer with proficient knowledge in the MERN stack.</p>
    <div className="text-white flex ">

        <button id='Downloadbutton' class="px-5 py-1 flex justify-center items-center rounded-full  mt-4 md:m-4 font-bold  border-2 border-white  ">
        <a class="m-1" href='pdf/NikhilLende.pdf' download="NikhilLende.pdf">Get My Resume</a></button>
       </div>

    </div>
        
      </Parallax>
    
   )

 }
 export default Landing;