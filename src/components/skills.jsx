import { Skillsdata } from '@/const'
import React from 'react'



export const Skills = (props) => {
  return(
   <div class="flex justify-center items-center  flex-col">
     <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" data-aos="fade-up">
            <span> My</span><span class="text-blue-700 mx-2">SkillSet</span></span>
   <div id="cont" class="flex justify-center items-center flex-wrap" >
   {
    Skillsdata.map(skill=>{
        return(
            <div id="card" class="flex justify-center items-center flex-col bg-slate-400 w-28 p-4 m-2">
                <img src={skill.image} class="rounded-full" />
                <span>{skill.skill}</span>
            </div>
        )
    })
   }
   </div>
   </div>
   )
  }
