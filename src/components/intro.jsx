import { intro } from '@/const'
import React from 'react'
import 'aos/dist/aos.css';


export const Intro = (props) => {
  return(
    <div id='intro' class="flex  justify-center items-center flex-col p-4  dark:bg-gray-900 dark:text-white ">
        <span class=" font-bold text-4xl flex justify-center items-center my-5 flex-wrap" data-aos="fade-up" >
          <span>The</span> <span class="text-blue-700 mx-2 ">Creative Mind</span>
           <span>Behind Your Next </span><span class="text-blue-700 ml-2">Project</span></span>

        <div class="flex flex-wrap justify-center items-center p-4 "  >
        {
            intro.map(intro=>{
                return(
                    <div className=" md:w-[210px] w-[270px] rounded-md  m-5 mx-10 hover:cursor-pointer "  data-aos="fade-up" data-aos-duration="700" >
                    <img
                      src={intro.image}
                      alt="Laptop"
                      className="h-[240px] w-full rounded-2xl object-cover"
                    />
                    <div className="p-4"  data-aos="fade-up" data-aos-duration="800">
                      <h1 className="text-lg font-semibold dark:text-gray-300">{intro.role}</h1>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                       {intro.description}
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
