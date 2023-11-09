import React from 'react'

import Drawer from 'react-modern-drawer'
import "./style.css"
import 'react-modern-drawer/dist/index.css'

const Nav = ({settheme,theme}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    const toggletheme=()=>{
      settheme(theme==="dark"?"Light":"dark")
    }
    return (
        <>
            
            <i  onClick={toggleDrawer} class="fa fa-bars font-extrabold text-white dark:text-white fixed top-5 right-5 z-40 fa-2x fa-fw"></i>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{
                    height: '200px', 
                    backgroundColor: 'white' 
                   
                  }}
            >
                   <button onClick={toggletheme} class=" bg-white rounded-full h-8 w-8 fixed top-5 left-5 z-[9999]">
                    {
                    theme==='dark'?<img src='images/light.png' />:<img src='images/dark.png' />
                    }  
                    
                    </button>
                   
                <div    class="w-full h-full  flex items-center justify-center flex-col  ">
                    
                <p class="m-2 active:text-blue-800 font-bold"><a  href='#landing'onClick={toggleDrawer}>Home</a></p>
                    <p class="m-2 active:text-blue-800 font-bold"><a  href='#projects' onClick={toggleDrawer}>Projects</a></p>
                    <p class="m-2 active:bg-blue-800 font-bold"><a  href='#skills' onClick={toggleDrawer}>Skills</a></p>
                   <p class="m-2 active:bg-blue-800 font-bold"> <a  href='#contact' onClick={toggleDrawer}>Contact</a></p>
                    <i onClick={toggleDrawer} class="fa fa-times absolute top-4 right-4  fa-fw"></i>
                </div>
            </Drawer>
        </>
    )
}

export default Nav;