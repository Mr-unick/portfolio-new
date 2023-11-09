import React from 'react'
import "./style.css"

import 'animate.css';
import Typewriter from "typewriter-effect";
import { Socials } from './footer';
import { Background, Parallax } from 'react-parallax';

 const Landing = (props) => {
  
  return(
    <Parallax
    strength={600}
     className="h-screen  w-screen flex justify-center items-center  bg-gradient-to-b from-[#a16ef5] to-[#4b03ba]" 
     bgImage='./gggg.svg'
     
      >
       
    <div  id='landing' class=" flex justify-center items-center  flex-col dark:bg-black dark:bg-opacity-50 h-screen w-screen text-start px-6">
    <p class="animate__animated animate__backInLeft text-4xl font-bold md:text-5xl dark:text-white text-white md:my-2 font-[Teko', sans-serif]  flex flex-wrap my-5">HEY, I'M NIKHIL LENDE</p>
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
    <p class="text-gray-200 mt-3 animate__animated animate__fadeInUp flex flex-wrap   dark:text-gray-400  md:justify-center justify-start md:items-center text-start md:text-center items-start  md:my-4 my-8 w-full md:[w-340px]">
      A dedicated full-stack developer with proficient knowledge in the MERN stack.</p>
    <div className="text-white flex md:justify-center md:items-center  items-start justify-start  w-full">

        <button id='Downloadbutton' class="px-5 py-1 flex md:items-center text-center items-start  rounded-full  mt-6 md:m-4 font-bold  border-2 border-white  ">
        <a class="m-1" href='pdf/NikhilLende.pdf' download="NikhilLende.pdf">Get My Resume</a></button>
       </div>

    </div>
        
      </Parallax>
    
   )

 }
 export default Landing;