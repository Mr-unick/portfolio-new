"use client";

import Landing from '@/components/landing'
import Aos from 'aos';
import Image from 'next/image'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'

import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import Nav from '@/components/nav';
import ContactForm from '@/components/form';
import { Footer } from '@/components/footer';
import { Skills } from '@/components/skills';



export default function Home() {


  const[theme,settheme]=useState("Light")
 
  useEffect(()=>{
   Aos.init({duration:2000})
   if(theme==="dark"){
    document.documentElement.classList.add("dark");
   }else{
    document.documentElement.classList.remove("dark");
   }
  },[theme])

const toggletheme=()=>{
  settheme(theme==="dark"?"Light":"dark")
}

  return (
    <div>
      <button onClick={toggletheme} class=" bg-white rounded-full h-9 w-9 fixed top-5 left-5 z-[9999]">
    {
    theme==='dark'?<img src='images/light.png' />:<img src='images/dark.png' />
    }  
      
     </button>
    
   <Nav/>
    <Landing/>
    <Intro/>
 <Projects/>
 <Skills/>
<ContactForm/>
<Footer/>
    </div>
  )
}
