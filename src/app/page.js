"use client";

import Landing from '@/components/landing'
import Aos from 'aos';
import Image from 'next/image'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import Nav from '@/components/nav';
import ContactForm from '@/components/form';
import { Footer } from '@/components/footer';



export default function Home() {

  useEffect(()=>{
   Aos.init({duration:2000})
  },[])
  return (
    <div>
   <Nav/>
    <Landing/>
    <Intro/>
 <Projects/>
<ContactForm/>
<Footer/>
    </div>
  )
}
