import { useState, useEffect, useRef } from 'react'
import { useScroll } from '../hooks/useScroll';

const NavBar = ({height, setHeight, showNav, logo}) => {

    const headerHeight = navHeading.current.offsetHeight

    useEffect(() => {
        setHeight(headerHeight)
        
    }, [])

    return (
        <header ref={navHeading} style={{top: `-${showNav.height}px`}} className="fixed filter h-20 w-full z-10 header-nav">
            <div className="flex items-center w-full md:w-10/12 2xl:w-8/12 py-2 mx-auto">
                <div className="logo w-10 sm:w-16 md:w-18">
                    <img className="transform w-full h-full" src={logo} alt="veto logo" />
                </div>
                <p className="font-mw font-bold text-lg text-gray-400 mx-2">veto</p>
            </div>
        </header>
    )
}

export default NavBar
