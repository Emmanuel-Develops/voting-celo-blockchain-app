import { useState, useEffect } from 'react';

export const useScroll = (maxScrollable, headerHeight) => {


    let lastSt = 0
    let delta = 5

    // const [scrollUp, setScrollUp] = useState(false);
    const [showNav, setShowNav] = useState({height: 0});
    const [didScroll, setDidScroll] = useState(false);

    function handleNavDisplay(height, current, total) {
        if (Math.abs(lastSt-current) <= delta) return
        // if youre scrolling downwards move the navbar upwards by the 'height' value
        if (current > lastSt && current > height) {
            setShowNav({height})
        } 
        // if youre scrolling upwards bring the navbar back into view by resetting 'height'
        else {
            if (current < total) {
                setShowNav({height: 0})
            }
        }

        lastSt = current
    }

    function handleScroll() {
        const current = window.scrollY
        console.log({maxScrollable, headerHeight, current, showNav})
        // handRotation(scrollCurrent, scrollHeight)
        handleNavDisplay(headerHeight, current, maxScrollable)
    }

    useEffect(async () => {
        window.addEventListener('scroll', () => { setDidScroll(true)})
        
        // let didScroll

        setInterval(() => {
           if (didScroll) {
               handleScroll()
               setDidScroll(false)
           } 
        }, 100)
        
        return () => clearInterval()
    }, [])

    return [didScroll, showNav]
}


