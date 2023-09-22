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
            <button class="px-5 rounded-full bg-slate-500 fixed top-4 right-4 z-40" onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{
                    height: '200px', 
                    backgroundColor: 'transparent' 
                   

                  }}
            >
                <div    class="w-full h-full bg-white flex items-center justify-center flex-col">
                    <a class="m-2" href='#landing-page'onClick={toggleDrawer}>Home</a>
                    <a class="m-2" href='#projects' onClick={toggleDrawer}>Projects</a>
                    <a class="m-2" href='#skills' onClick={toggleDrawer}>Skills</a>
                    <a class="m-2" href='#contact' onClick={toggleDrawer}>Contact</a>
                </div>
            </Drawer>
        </>
    )
}

export default Nav;