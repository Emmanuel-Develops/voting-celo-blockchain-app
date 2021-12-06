import React, { useState, useEffect } from 'react'
import { getProjects } from '../data'
import ButtonRoute from './ButtonRoute'

function Grid() {

    const [projects, setProjects] = useState()


    useEffect(() => {
        const data = getProjects()
        setProjects(data)

    }, [])

    return (

        projects ? 
        <section className="grid my-5 grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
            {projects.map((project) => 
                <div key={project.index} className="flex flex-col md:flex-row justify-items-stretch font-roboto text-white md:text-xl font-medium shadow-2xl rounded-xl bg-gray-800">
                    <div className='p-3 text-gray-200 text2xl md:text-3xl p-2 md:p-4 font-bold sm:rounded-t-xl md:rounded-l-xl md:w-2/5'>
                        <div className="h-full">
                            {project.name}
                        </div>
                    </div>
                    <div className="p-5 h-100 text-sm md:text-base md:w-3/5 outline-white">
                        <div className="">
                            <p className="font-bold text-sm opacity-60 mb-6">INFO</p>
                            <p className="mb-6 md:mb-10 text-md md:text-lg">{project.info}</p>
                        </div>

                        {/* <div className="w-90 bg-red-400 h-1 rounded opacity-60 my-5"></div> */}
                        
                        <div className="flex relative justify-between items-center mb-4 bg-gray-700 bg-opacity-80 rounded pl-2">
                            <div className="">Entry: ${project.costToEntry}</div>
                            <div className="bg-pink-200 bg-opacity-80 text-gray-700 px-2 py-2 rounded-r">
                                <i class="fa-solid fa-user w-5"></i>
                                <span className="ml-2">{project.contestants.length}</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-10 bg-gray-700 bg-opacity-80 rounded pl-2">
                            <div className="">Voting: ${project.costToVote}</div>
                            <div className="bg-pink-200 bg-opacity-80 text-gray-700 px-2 py-2 rounded-r">
                                <i class="fa-solid fa-check-to-slot w-5"></i>
                                <span className="ml-2">{project.contestants.reduce((a,b) => a + b.votes, 0)}</span>
                            </div>
                        </div>

                        <div className="grid place-items-center h-100 relative outline-black top">
                            <ButtonRoute route={`dashboard/${project.index}`} id={project.index} text={'OPEN'} />
                        </div>
                    
                    </div>
                </div>
            )}
        </section>
        : <h1>Nothing to see here</h1>
        
    )
}

export default Grid
