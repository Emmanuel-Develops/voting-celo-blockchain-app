import { useState, useEffect, useCallback } from 'react';

export const useScroll = () => {   

    const [deg, setDeg] = useState(180)
    const [scrollUp, setScrollUp] = useState(false);
    // const [headerHeight, setHeaderHeight] = useState(0);
    const [showNav, setShowNav] = useState({height: 0});

    // const navHeight = useCallback(node => {
    //     if (node == null) return
    //     console.log(node.offsetHeight)
    // }, [])

    let lastSt = 0
    let delta = 70
    let headerHeight = 80
    

    function handleNavDisplay(height, current, total) {
        if (Math.abs(lastSt-current) <= delta) return
        // if youre scrolling downwards move the navbar upwards by the 'height' value
        if (current > lastSt && current > height) {
            setShowNav({height})
        } 
        // if youre scrolling upwards bring the navbar back into view by resetting 'height'
        else if (current < total) {
            setShowNav({height: 0})
        }

        lastSt = current
    }

    function handRotation(current, total) {
        setDeg(Math.round(current/total * 180 - 180) || 0)
    }

    function handleScroll(totalHeight) {
        let current = window.scrollY

        current/totalHeight > 0.5 ? setScrollUp(true) : setScrollUp(false)
        handRotation(current, totalHeight)
        handleNavDisplay(headerHeight, current, totalHeight)
    }

    useEffect(async () => {
        let didScroll
        let totalHeight

        window.addEventListener('scroll', () => { 
            didScroll = true
            const bodyHeight = document.body.offsetHeight
            const winHeight = window.innerHeight
            totalHeight = bodyHeight - winHeight
            handleScroll(totalHeight)
            return totalHeight
        })
        

        // setInterval(() => {
        //    if (didScroll) {
        //        handleScroll(totalHeight)
        //        didScroll = false
        //    } 
        // }, 125)
        
        // return () => clearInterval()
    }, [scrollUp])

    return [showNav, deg, scrollUp]
}


