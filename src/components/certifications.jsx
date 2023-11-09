import React from 'react'



export const Certifications = (props) => {
  return(
    <div class="flex justify-center items-center w-sreen h-[400px] p-5 flex-col dark:bg-gray-900 " >
      <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" data-aos="fade-up" data-aos-duration="400">
            <span class="text-blue-700">Experience and</span><span class=" mx-2 dark:text-white">Certifications</span></span>
        <div class="flex  items-center justify-start flex-col dark:text-gray-400  p-3 h-full rounded-3xl " >
          <div class="flex  items-start justify-start flex-col">
            <span class="text-2xl font-bold my-1">Web Development</span>
            <div class="flex justify-center items-center my-1 text-xs">@Internshala ,2022</div>
            <span class="my-1 text-sm">The training consisted of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and Final Project modules.</span>
          </div>
          <button class=" rounded-full w-[150px] bg-blue-700 text-white p-2 my-5 ">
          <a href='pdf/webdev.pdf' download="webdev.pdf">
         see certificate </a></button>
        </div>
    </div>
   )
  }
