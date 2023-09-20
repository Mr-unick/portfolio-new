import { projects } from '@/const'
import React, { useState } from 'react'
import 'aos/dist/aos.css';


export const Projects = (props) => {

const [keyword,setkey]=useState("");


const data=projects.filter(project=>project.technologies.includes(keyword))




  return(
    <div id="projects" class=" flex justify-center items-center flex-col bg-slate-100 p-2" >
     <span class="text-5xl font-extrabold mt-7">My Creative <span class="text-blue-700">Portfolio</span> Section</span>

<div className="box text-white flex justify-center items-center flex-wrap py-8 px-5">
  <button className='rounded-full bg-slate-600 px-5 py-1 m-2' onClick={()=>setkey("React")}>React</button>
  <button className='rounded-full bg-slate-600 px-5 py-1 m-2' onClick={()=>setkey("React Native")}>React Native</button>
  <button className='rounded-full bg-slate-600 px-5 py-1 m-2' onClick={()=>setkey("Frontend")}>Frontend</button>
  <button className='rounded-full bg-slate-600 px-5 py-1 m-2' onClick={()=>setkey("MERN")}>MERN</button>
  <button className='rounded-full bg-slate-600 px-5 py-1 m-2 active:bg-black' onClick={()=>setkey("")}>All</button>
</div>


    {
       ( keyword?data:projects).map((project)=>{
            return(
            
      <div className="flex max-w-2xl flex-col items-center rounded-2xl border md:flex-row m-5 overflow-hidden background-postion-center bg-white p-3 " data-aos="fade-up">
      <div className="h-full w-full md:h-[250px] md:max-w-[320px] md:min-w-[320px] ">
      <a href={project.link} class='hover:opacity-50 hover:cursor-pointer'>
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-full w-full rounded-xl object-cover"
        />
        </a>
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {project.projectName}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
          {project.description}
          </p>
          <div className="mt-4">
            {
                project.technologies.map(tech=>{
                    return(
                        <span className="mb-2 mr-1 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
             #{tech}
            </span>
                    )
                })
            }
            
            
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://img.icons8.com/ios-glyphs/30/github.png"
              alt="Dan_Abromov"
            />
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://img.icons8.com/material-sharp/24/globe--v1.png"
              alt="Dan_Abromov"
            />
            
          </div>
        </div>
      </div>
    </div>
            )
        })
    }

</div>
 
   )
  }
