import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqokywy");
  if (state.succeeded) {
      return <div id="box" class="h-60 w-full flex justify-center items-center flex-col">
        <span class="text-4xl font-extrabold my-2 flex justify-center items-center flex-wrap" >
            <span>Thanks for </span><span class="text-blue-700 mx-2">joining Us !</span>
        </span>
        <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" >
            <span class="text-blue-700 mx-2">Your Response </span><span >is Valueable</span>
        </span>
      </div>;
  }
  return (
    <div id="contact" class="flex flex-col justify-center items-center p-10 bg-gray-100 w-screen h-scrren">
        <span class="text-4xl font-extrabold my-8 flex justify-center items-center flex-wrap" data-aos="fade-up">
            <span>Lets Have A </span><span class="text-blue-700 mx-2">Cofee</span></span>
    
        <form class="flex flex-col justify-center items-center" onSubmit={handleSubmit}  data-aos="fade-up">

        
        <input
            id="name"
            type="text" 
            name="name"
            class="  w-[320px] h-10 md:w-[420px] p-1 px-2 bg-white rounded-lg outline-none m-2"
            placeholder='Enter Name'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <input
            id="email"
            type="email" 
            name="email"
            class="  w-[320px] h-10 md:w-[420px] p-1 px-2 bg-white rounded-lg outline-none m-2"
            placeholder='Enter Email'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
            class="m-2 rounded-lg  w-[320px] h-[200px] md:w-[420px]  px-2 py-4 outline-0 bg-white resize-none"
            placeholder='Type Something'
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} class="m-2 rounded-full px-5 py-2  bg-blue-700 text-white w-40 ">
           Send
        </button>
        </form>
    </div>
  );
}

export default ContactForm;
