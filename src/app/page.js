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
import { Certifications } from '@/components/certifications';



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
  

  return (
    <div>
    <Nav settheme={settheme} theme={theme}/>
    <Landing/>
    <Intro/>
    <Projects/>
    <Skills/>
    <Certifications/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}
