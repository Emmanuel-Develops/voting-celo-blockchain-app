import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/veto.png'
import hand from '../assets/images/hand.png'
import bar from '../assets/images/memoji-bar.png'
import barT from '../assets/images/memoji-bar1.png'
import desktopImg from '../assets/images/iMac 24 inch.png'
// import memojiBg from '../assets/images/bg-memoji.png'

const HomePage = () => {

    const [scrollUp, setScrollUp] = useState(false);
    const [showNav, setShowNav] = useState({});

    const navHeading = useRef(null)
    const voteNow = useRef(null)
    const handRef = useRef(null)
    const splashScreen = useRef(null)

    let lastSt = 0
    let delta = 5

    const clickScroll = (e) => {
        scrollUp ? splashScreen.current.scrollIntoView(true):voteNow.current.scrollIntoView(true)
        console.log({scrollUp})
    }

    function handRotation(current, total) {
        handRef.current.style.transform = `rotate(${Math.round(current/total * 180 - 180) || 0}deg)`
        if (current / total > 0.5) {
            setScrollUp(true)
        } else {
            setScrollUp(false)
        }
    }

    function handleNavDisplay(height, current, total) {
        if (Math.abs(lastSt-current) <= delta) return
        // console.log({current}, {total})
        if (current > lastSt && current > height) {
            setShowNav({height})
        } else {
            if (current < total) {
                setShowNav({height: 0})
            }
        }

        lastSt = current
    }

    useEffect(() => {
        // setPageHeight(voteNow.current.offsetTop)
        window.addEventListener('scroll', () => { didScroll = true})
        
        let didScroll
        // let lastSt = 0
        // let delta = 5
        const headerHeight = navHeading.current.offsetHeight

        setInterval(() => {
           if (didScroll) {
               handleScroll()
               didScroll = false
           } 
        }, 125)
        function handleScroll() {
            const scrollHeight = voteNow.current.offsetTop
            const scrollCurrent = window.scrollY
            // console.log('final', scrollHeight)
            // console.log('current', window.scrollY)
            // console.log(Math.round(window.scrollY / scrollHeight * 360), 'deg')
            // console.log(window.scrollHeight)

            handRotation(scrollCurrent, scrollHeight)

            handleNavDisplay(headerHeight, scrollCurrent, scrollHeight)

        }
        
    }, [])


    return (
        <div className="w-100">
            <div className="fixed w-screen h-screen bg-black -z-2"></div>
            <div className="fixed top-0 left-0 h-screen moving-bg -z-1">
                {/* <div className="bg-gradient-to-br from-blue-400 bg-opacity-20 w-screen h-full"></div> */}
            </div>
            <header ref={navHeading} style={{top: `-${showNav.height}px`}} className="fixed filter h-20 w-full z-10 header-nav">
                <div className="flex items-center w-full md:w-10/12 2xl:w-8/12 py-2 mx-auto">
                    <div className="logo w-10 sm:w-16 md:w-18">
                        <img className="transform w-full h-full" src={logo} alt="veto logo" />
                    </div>
                    <p className="font-mw font-bold text-lg text-gray-400 mx-2">veto</p>
                </div>
            </header>
            <main className="w-full bg-black bg-opacity-40">
                <div ref={splashScreen} className="pt-20 min-h-screen flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-2 md:w-10/12 max-w-7xl py-8 px-4 md:px-0 mx-auto">
                        <div className="intro  md:col-span-2">
                        <span className='inline-block font-black my-2 px-3 py-1 text-3xl md:text-5xl lg:text-6xl rounded-xl transparent-text'>VETO</span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl text-blue-200 font-bold leading-relaxed tracking-wide">
                                 The Ultimate <span className="font-bold">Web3</span> Voting Platform
                            </h2>
                        </div>
                        <div className=" md:col-span-4">
                            <img src={barT} alt="splash-screen" />
                        </div>
                    </div>
                    <div ref={handRef} onClick={(e) => clickScroll(e)} style={{ transform: `rotate(${-180}deg)` }} className="hand-wrapper absolute cursor-pointer lg:fixed w-12 md:w-20 top-1/2 right-10">
                        <img src={hand} className="w-full filter drop-shadow-lg saturate-0 bouncy-hand transition-all" alt="illustration click to scroll" />
                    </div>
                </div>
                <div className="min-h-screen grid place-items-center bg-white py-20 px-0">
                    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-6 md:gap-x-10 md:gap-y-0 md:w-10/12 max-w-7xl py-8 mx-auto">
                        
                        <div className="col-span-4">
                            <h2 className="font-genos text-3xl md:text-4xl text-yellow-800 tracking-wide capitalize ">what is veto?</h2>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5">Veto is a decentralised app built on the celo blockchain</p>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5">Its primary objective is to provide a platform to vote on various matters. Do you need to vote between contestants for a beauty brand event?... Try veto.</p>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5">Users can create their own issues to vote on and anyone can create an object that can be voted for regarding the issue</p>
                        </div>
                        <div className="w-full col-span-2">
                            <svg className="w-full ml-20px" viewBox="0 0 85 25" fill="none">
                                <path className="fill-current text-blue-400" d="M64.2368 22.079L66.5 21.3684V2.63159L64.2368 3.34212V22.079ZM38.1316 10.7105C39.5526 10.7105 40.8684 11.3421 41.7105 12.3947L42.6316 10.2632C41.421 9.10528 39.8158 8.55264 38.1316 8.55264C34.2368 8.55264 31.5526 11.6316 31.5789 15.0263C31.6052 18.7105 34.5 21.7105 38.1316 21.7105C39.9737 21.7105 41.3684 21.1579 42.421 20.3947V17.7895C41.3158 18.8947 39.7105 19.5526 38.3158 19.5526C36.2105 19.5526 33.8421 17.8421 33.8421 15.0263C33.8421 12.4211 35.8947 10.7105 38.1316 10.7105ZM53.1842 8.55264C49.2895 8.55264 47.0263 11.6316 47.0263 15.0263C47.0263 18.7105 49.9473 21.7105 53.5789 21.7105C55.421 21.7105 56.8158 21.1579 57.8684 20.3947V17.7895C56.7631 18.8947 55.1579 19.5526 53.7631 19.5526C51.8947 19.5526 49.8421 18.3947 49.421 15.9474H59.3421V15.079C59.3421 11.4474 56.9473 8.55264 53.1842 8.55264ZM77.6316 8.55264C74 8.55264 71.0526 11.5 71.0526 15.1316C71.0526 18.7632 74 21.7105 77.6316 21.7105C81.2631 21.7105 84.2105 18.7632 84.2105 15.1316C84.2105 11.5 81.2631 8.55264 77.6316 8.55264ZM53.2105 10.7105C54.9737 10.7105 56.8421 11.8158 57 13.9474H49.421C49.5789 11.8158 51.4473 10.7105 53.2105 10.7105ZM77.6316 19.5526C75.1842 19.5526 73.2105 17.579 73.2105 15.1316C73.2105 12.6842 75.1842 10.7105 77.6316 10.7105C80.0789 10.7105 82.0526 12.6842 82.0526 15.1316C82.0526 17.579 80.0789 19.5526 77.6316 19.5526Z"></path><path d="M15.1316 17.1053C19.1284 17.1053 22.3684 13.8653 22.3684 9.86842C22.3684 5.87158 19.1284 2.63158 15.1316 2.63158C11.1348 2.63158 7.89476 5.87158 7.89476 9.86842C7.89476 13.8653 11.1348 17.1053 15.1316 17.1053ZM15.1316 19.7368C9.6816 19.7368 5.26318 15.3184 5.26318 9.86842C5.26318 4.41842 9.6816 0 15.1316 0C20.5816 0 25 4.41842 25 9.86842C25 15.3184 20.5816 19.7368 15.1316 19.7368Z" fill="#35D07F"></path><path d="M9.86842 22.3684C13.8653 22.3684 17.1053 19.1284 17.1053 15.1316C17.1053 11.1348 13.8653 7.89476 9.86842 7.89476C5.87158 7.89476 2.63158 11.1348 2.63158 15.1316C2.63158 19.1284 5.87158 22.3684 9.86842 22.3684ZM9.86842 25C4.41842 25 0 20.5816 0 15.1316C0 9.6816 4.41842 5.26318 9.86842 5.26318C15.3184 5.26318 19.7368 9.6816 19.7368 15.1316C19.7368 20.5816 15.3184 25 9.86842 25Z" fill="#FBCC5C"></path><path d="M15.4553 19.7315C16.1392 18.903 16.6292 17.932 16.89 16.8899C17.9321 16.6294 18.9029 16.1391 19.7316 15.4554C19.6937 16.6623 19.4339 17.852 18.9647 18.9646C17.8521 19.4338 16.6624 19.6936 15.4553 19.7315ZM8.11026 8.10989C7.06815 8.37042 6.09736 8.86068 5.26868 9.54436C5.30657 8.33752 5.56631 7.14778 6.03552 6.03515C7.14815 5.56594 8.33789 5.30621 9.54473 5.26831C8.86105 6.09699 8.37078 7.06778 8.11026 8.10989Z" fill="#ECFF8F"></path>
                            </svg>
                            {/* <img src={barT} alt="" /> */}
                        </div>
                        
                        <div className="col-span-4">
                            <h2 className="font-genos text-3xl md:text-4xl text-yellow-800 tracking-wide capitalize mt-5 lg:mt-10">why veto?</h2>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5">veto is a personal project to help solidify my knowledge on creating smart contracts.</p>
                        </div>

                        <div className="col-span-4">
                            <h2 className="font-genos text-3xl md:text-4xl text-yellow-800 tracking-wide capitalize mt-5 lg:mt-10">How to get Started?</h2>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5">You'll need a celo extension wallet to interact with the app. Create an acoout (It's really easy and straightforward very similar to metamask), then change the network at the top-right of the extension to <span className="text-yellow-400 bg-blue-800 rounded px-2">Alfajores-Test network</span>
                            </p>
                            <span className="font-genos text-lg md:text-2xl">
                            Get it here:
                                <a href="https://chrome.google.com/webstore/detail/celoextensionwallet/kkilomkmpmkbdnfelcpgckmpcaemjcdh?hl=en" target="_blank" className="inline text-blue-800"> celo wallet chrome extension</a>
                            </span>
                            <p className="font-genos text-black-300 text-lg md:text-2xl pt-5"> The next requirement is a desktop device. You'll need a chrome browser on a desktop to connect to your celo wallet through the extension, and with that the wallet can interact with veto.
                            </p>
                        </div>
                        
                        <img src={desktopImg} alt="" className="col-span-2"/>
                        
                    </div>
                </div>

                <div ref={voteNow} className="min-h-screen flex items-center justify-center">
                    <div className="flex items-center md:w-10/12 max-w-7xl px-6 lg:px-12 py-8 mx-auto">
                        <div className="flex flex-col content-between vote-card md:w-1/3 2xl:1/4 h-quto bg-white p-10 rounded">
                            <p>Get&nbsp;Started</p>
                            <button id="vote-now" className="font-genos text-3xl tracking-wider text-blue-200 uppercase font-bold bg-blue-400 rounded-md py-2 px-6 hover:bg-blue-600 transform hover:-translate-y-1 filter drop-shadow-lg">Vote</button>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default HomePage

