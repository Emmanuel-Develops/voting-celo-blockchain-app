import React from 'react'
import logo from '../assets/images/veto.png'
// import memojiBg from '../assets/images/bg-memoji.png'

const HomePage = () => {
    return (
        <div className="w-100 overflow-hidden">
            <div className="fixed w-screen h-screen bg-black -z-2"></div>
            <div className="fixed top-0 left-0 h-screen moving-bg -z-1">
                {/* <div className="bg-gradient-to-br from-blue-400 bg-opacity-20 w-screen h-full"></div> */}
            </div>
            <header className="w-full z-10 bg-black bg-opacity-80">
                <div className="flex items-center w-full md:w-10/12 2xl:w-8/12 py-2 px-6 lg:px-12 mx-auto">
                    <div className="logo w-10 sm:w-16 md:w-20">
                        <img className="transform w-full h-full" src={logo} alt="veto logo" />
                    </div>
                    <p className="font-mw text-lg text-platinum mx-2">veto</p>
                </div>
            </header>
            <main className="w-full bg-black bg-opacity-40">
                <div className="md:w-10/12 2xl:w-8/12 px-6 lg:px-12 mx-auto scroll-snap">
                    <div className="h-screen flex items-center scroll-snap-child">
                        <div>
                            <h1 className="font-genos text-3xl md:text-6xl sm:text-5xl font-bold text-orangeWeb tracking-wide uppercase">Welcome to Veto</h1>
                            <h2 className="font-genos text-3xl md:text-4xl text-orangeWeb tracking-wide capitalize mt-5 lg:mt-10">what is veto?</h2>
                            <p className="font-genos text-platinum text-lg md:text-2xl pt-5">Veto is a decentralised app built on the celo blockchain</p>
                            <p className="font-genos text-platinum text-lg md:text-2xl pt-5">Its primary objective is to provide a platform to vote on various matters. Do you need to vote between contestants for a beauty brand event?... Try veto.</p>
                            <p className="font-genos text-platinum text-lg md:text-2xl pt-5">Users can create their own issues to vote on and anyone can create an object that can be voted for regarding the issue</p>
                            <h2 className="font-genos text-3xl md:text-4xl text-orangeWeb tracking-wide capitalize mt-5 lg:mt-10">why veto?</h2>
                            <p className="font-genos text-platinum text-lg md:text-2xl pt-5">veto is a personal project to help solidify my knowledge on creating smart contracts.</p>
                        </div>
                    </div>
                    <div className="h-screen flex items-center justify-center scroll-snap-child">
                        <button className="font-genos text-3xl tracking-wider text-gray-400 uppercase font-bold bg-blue-400 rounded mt-10 py-2 px-6 hover:bg-blue-600 transform hover:-translate-y-1">Vote</button>
                    </div>
                </div>
                
            </main>
            
        </div>
    )
}

export default HomePage

