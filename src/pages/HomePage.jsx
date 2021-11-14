import React from 'react'
// import memojiBg from '../assets/images/bg-memoji.png'

const HomePage = () => {
    return (
        <div className="relative flex items-center w-screen h-screen bg-black overflow-hidden">
            <div className="mx-auto my-auto text-center z-10">
                <h1 className="backdrop-filter backdrop-blur w-100 font-genos text-3xl md:text-7xl sm:text-5xl font-bold text-orangeWeb tracking-wide capitalize p-5 rounded  ">Welcome to Veto</h1>
                <button className="font-genos text-3xl tracking-wider text-gray-400 uppercase font-bold bg-blue-400 rounded mt-10 py-2 px-6 hover:bg-blue-600 transform hover:-translate-y-1">Vote</button>
            </div>
            <div className="absolute top-0 left-0 h-screen moving-bg">
                {/* <div className="bg-gradient-to-br from-blue-400 bg-opacity-20 w-screen h-full"></div> */}
            </div>
            
        </div>
    )
}

export default HomePage

