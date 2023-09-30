import React from 'react'

import Drawer from 'react-modern-drawer'
import "./style.css"
import 'react-modern-drawer/dist/index.css'

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            
            <i  onClick={toggleDrawer} class="fa fa-bars font-extrabold text-blue-600 dark:text-white fixed top-5 right-5 z-40 fa-2x fa-fw"></i>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{
                    height: '200px', 
                    backgroundColor: 'transparent' 
                   

                  }}
            >
                <div    class="w-full h-full  flex items-center justify-center flex-col  bg-gray-100">
                <button class="m-2 active:text-blue-800 font-bold"><a  href='#landing'onClick={toggleDrawer}>Home</a></button>
                    <button class="m-2 active:text-blue-800 font-bold"><a  href='#projects' onClick={toggleDrawer}>Projects</a></button>
                    <button class="m-2 active:bg-blue-800 font-bold"><a  href='#skills' onClick={toggleDrawer}>Skills</a></button>
                   <button class="m-2 active:bg-blue-800 font-bold"> <a  href='#contact' onClick={toggleDrawer}>Contact</a></button>
                    <i onClick={toggleDrawer} class="fa fa-times absolute top-4 right-4  fa-fw"></i>
                </div>
            </Drawer>
        </>
    )
}

export default Nav;