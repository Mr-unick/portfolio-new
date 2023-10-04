import { Skillsdata } from '@/const'
import React from 'react'



export const Skills = (props) => {
  return(
   <div id='skills' class="flex justify-center items-center  flex-col dark:bg-gray-900 dark:text-white">
     <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" data-aos="fade-up">
            <span> My</span><span class="text-blue-700 mx-2">SkillSet</span></span>
   <div id="cont" class="flex flex-col" >
   {
    Skillsdata.map((skill)=>{
        return(
            <div class="flex justify-center items-center flex-col w-screen   p-4   m-2 " data-aos="fade-up">
                <h1 class="text-2xl  font-extrabold p-2  w-screen flex justify-center items-center text-gray-500 dark:text-gray-400" >{skill.categoryName}</h1>
                <div class="flex flex-wrap justify-center items-center" >
                {
                    skill.skills.map(skill=>{
                        return(
                            <div id="card" class="flex justify-center items-center flex-col md:w-36 w-32   dark:text-gray-400 m-2 " >
                            <img src={skill.skillData} class=" md:h-[70px] md:w-[70px] w-[50px] h-[50px] m-2" />
                            <span class="font-bold text-gray-500 mt-2 w-full flex justify-center  dark:text-gray-400 items-center">{skill.skillName}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    })
   }
   </div>
   </div>
   )
  }
