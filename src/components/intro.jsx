import { intro } from '@/const'
import React from 'react'
import 'aos/dist/aos.css';


export const Intro = (props) => {
  return(
    <div id='intro' class="flex  justify-center items-center flex-col p-4 my-10 bg-gray-100 ">
        <h1 class=" font-bold text-5xl w-[600px] justify-center items-center my-5" >The <span class="text-blue-700 text-5xl ">Creative Mind</span> Behind Your Next <span class="text-blue-700 ">Project</span></h1>

        <div class="flex flex-wrap justify-center items-center p-4 "  >
        {
            intro.map(intro=>{
                return(
                    <div className="w-[220px] md:[250px] rounded-md  m-5 hover:cursor-pointer "  data-aos="fade-up" >
                    <img
                      src={intro.image}
                      alt="Laptop"
                      className="h-[240px] w-full rounded-2xl object-cover"
                    />
                    <div className="p-4"  data-aos="fade-up">
                      <h1 className="text-lg font-semibold">{intro.role}</h1>
                      <p className="mt-3 text-sm text-gray-600">
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
