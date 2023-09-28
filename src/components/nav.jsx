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
            
            <i  onClick={toggleDrawer} class="fa fa-bars font-extrabold text-blue-600 fixed top-4 right-4 z-40 fa-2x fa-fw"></i>
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
                    <a class="m-2" href='#landing'onClick={toggleDrawer}>Home</a>
                    <a class="m-2" href='#projects' onClick={toggleDrawer}>Projects</a>
                    <a class="m-2" href='#skills' onClick={toggleDrawer}>Skills</a>
                    <a class="m-2" href='#contact' onClick={toggleDrawer}>Contact</a>
                    <i onClick={toggleDrawer} class="fa fa-times absolute top-4 right-4  fa-fw"></i>
                </div>
            </Drawer>
        </>
    )
}

export default Nav;