import { projects } from '@/const'
import React, { useState } from 'react'
import 'aos/dist/aos.css';


export const Projects = (props) => {

const [keyword,setkey]=useState("");


const data=projects.filter(project=>project.technologies.includes(keyword))




  return(
    <div id="projects" class=" flex justify-center items-center flex-col  p-2 bg-gray-100" >
     <span class="text-4xl font-extrabold mt-7 flex justify-center items-center flex-wrap" data-aos="fade-up"><span>My Creative</span> <span class="text-blue-700 mx-2">Portfolio</span> <span>Section</span></span>

<div className="box text-white flex justify-center items-center flex-wrap py-8 px-5" data-aos="fade-up">
  <button className='rounded-full bg-blue-500 px-5 py-1 m-2' onClick={()=>setkey("React")}>React</button>
  <button className='rounded-full bg-blue-500 px-5 py-1 m-2' onClick={()=>setkey("React Native")}>Android</button>
  <button className='rounded-full bg-blue-500 px-5 py-1 m-2' onClick={()=>setkey("Frontend")}>Frontend</button>
  <button className='rounded-full bg-blue-500 px-5 py-1 m-2' onClick={()=>setkey("MERN")}>MERN</button>
  <button className='rounded-full bg-blue-500 px-5 py-1 m-2 active:bg-black' onClick={()=>setkey("")}>All</button>
</div>
<div class=" flex justify-center items-center flex-wrap">

    {
       ( keyword?data:projects).map((project)=>{
            return(
            
              <div className="w-[300px]  border m-5 bg-white rounded-2xl p-3 " data-aos="fade-up">
              <div class="w-full h-full rounded-3xl bg-black ">
              <a href={project.link}>
              <img
                src={project.image}
                alt="Laptop"
                className="h-[200px] w-full rounded-2xl  object-cover shadow-inner hover:opacity-70 cursor-pointer" 
              />
              </a>
              </div>
              <div class="relative  h-10 w-28 p-2 px-5 rounded-full bg-white text-black -top-[27px] left-[82px] flex justify-center items-center  " > {project.type} </div>
              <div className="p-4" data-aos="fade-up" >
                <h1 className="inline-flex items-center text-lg font-semibold" >
                  {project.projectName} &nbsp; 
                </h1>
                <p className="mt-3 text-sm text-gray-600" >
                {project.description} 
                </p>
                
                
              </div>
            </div>
            )
        })
    }
</div>
</div>
 
   )
  }
