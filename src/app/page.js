"use client";

import Landing from '@/components/landing'
import Aos from 'aos';
import Image from 'next/image'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { NavBar } from '@/components/nav';


export default function Home() {

  useEffect(()=>{
   Aos.init({duration:2000})
  },[])
  return (
    <div>
      <NavBar/>
    <Landing/>
    <Intro/>
 <Projects/>
    </div>
  )
}
