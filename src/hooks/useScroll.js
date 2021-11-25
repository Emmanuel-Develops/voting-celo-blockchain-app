import { useState, useEffect } from 'react';

export const useScroll = ({ lastScrolledElement, headerHeight }) => {

    let lastSt = 0
    let delta = 5

    const [scrollUp, setScrollUp] = useState(false);
    const [showNav, setShowNav] = useState({});
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollCurrent, setScrollCurrent] = useState(0);

    export function handleNavDisplay(height, current=scrollCurrent, total=scrollHeight) {
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
        setScrollCurrent(current)
        
        // handRotation(scrollCurrent, scrollHeight)
        // handleNavDisplay(headerHeight, scrollCurrent, scrollHeight)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => { didScroll = true})
        
        let didScroll
        const height = lastScrolledElement.current.offsetTop
        setScrollHeight(height)

        setInterval(() => {
           if (didScroll) {
               handleScroll()
               didScroll = false
           } 
        }, 100)        
    }, [])

    return { scrollUp, showNav, scrollHeight, scrollCurrent }
}


