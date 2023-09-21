import React from 'react'


export const Cont = (props) => {
  return(
    <div class=" w-full flex justify-center items-center flex-col p-8">
      <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" data-aos="fade-up"><span>Lets Have A </span><span class="text-blue-700 mx-2">Cofee</span></span>
      <div id="cont-form " class="flex justify-center items-center flex-col text-sm font-normal">
      <input class="  w-[320px] h-10 md:w-[420px] p-1 px-2 bg-gray-100 rounded-lg outline-none m-2" type="text" name="name" placeholder="Name" data-aos="fade-up"/>
        <input class="m-2 rounded-lg p-1 px-2  w-[320px] h-10 md:w-[420px] bg-gray-100 outline-0 " type='email' name='email' placeholder='email' data-aos="fade-up"/>
        <textarea class="m-2 rounded-lg  w-[320px] h-[200px] md:w-[420px]  px-2 py-4 outline-0 bg-gray-100 resize-none" type='text' name='message' placeholder='message' data-aos="fade-up"/>
        <button class="m-2 rounded-full px-5 py-2  bg-blue-700 text-white w-40 " >Send</button>
      </div>

      </div>
   )

 }