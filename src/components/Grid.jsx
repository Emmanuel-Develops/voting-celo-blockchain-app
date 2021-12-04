import React, { useState, useEffect } from 'react'
import { getProjects } from '../data'

function Grid() {

    const [projects, setProjects] = useState()


    useEffect(() => {
        const data = getProjects()
        setProjects(data)

    }, [])

    console.log(projects)
    return (

        projects ? 
        <section className="grid my-5 grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => 
                <div key={project.index} className="flex font-genos text-gray-800 md:text-xl font-medium shadow-lg rounded-lg bg-black bg-opacity-20">
                    <div className='bg-blue-300 px-2 py-1 w-1/2 font-bold rounded-l-lg'>
                        {project.name}
                    </div>
                    <div className="p-3 rounded-r-lg" style={{ minWidth: '200px', maxWidth: '50%' }}>
                        <div className="">
                            <h3 className="font-bold text-sm">INFO</h3>
                            <p className="font-genos text-xl">{project.info}</p>
                        </div>

                        {/* <div className="w-90 bg-red-400 h-1 rounded opacity-60 my-5"></div> */}
                        
                        <div className="flex justify-between items-center mb-4 bg-gray-700 rounded pl-2">
                            <div className="text-white">Entry: ${project.costToEntry}</div>
                            <div className="bg-blue-400 px-2 py-2 rounded-r">
                                <i class="fa-solid fa-user"></i>
                                <span className="ml-2">{project.contestants.length}</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center mb-4 bg-gray-700 rounded pl-2">
                            <div className="text-white">Voting: ${project.costToVote}</div>
                            <div className="bg-blue-400 px-2 py-2 rounded-r">
                                <i class="fa-solid fa-check-to-slot"></i>
                                <span className="ml-2">{project.contestants.reduce((a,b) => a + b.votes, 0)}</span>
                            </div>
                        </div>

                        <div className="grid place-items-center">
                            <button>Open</button>
                        </div>
                    
                    </div>
                </div>
            )}
        </section>
        : <h1>Nothing to see here</h1>
        
    )
}

export default Grid
