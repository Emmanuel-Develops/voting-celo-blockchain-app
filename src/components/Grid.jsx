import React, { useState, useEffect } from 'react'
import { getProjects } from '../data'
import ButtonRoute from './ButtonRoute'
import ProjectCard from './ProjectCard'

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
                <ProjectCard key={project.index} project={project}/>
            )}
        </section>
        : <h1>Nothing to see here</h1>
        
    )
}

export default Grid
