import React, { useContext, useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import DashboardHeading from './DashboardHeading'
import DashboardContext from '../state/projects-context'

function Grid() {

    const context = useContext(DashboardContext)
    // const projects = context.state
    const initialState = context.state
    const [projects, setProjects] = useState(initialState)
    const [searchTerm, setSearchTerm] = useState("")  

    useEffect(() => {

        const timer = setTimeout(() => {
            updateProjects(searchTerm)
        }, 500);
        
        const updateProjects = (searchTerm) => {

            if (searchTerm == "") {
                return setProjects(initialState)
            }

            const results = initialState.filter((project) => {
                return project.name.toLowerCase().includes(searchTerm.toLowerCase())
            })

            setProjects(results)
        }

        return () => clearTimeout(timer)
    }, [searchTerm])


    return (
        <>
            <DashboardHeading heading={"Available Projects"} searchTerm={searchTerm} update={setSearchTerm} />
            {projects ? 
            <section className="grid my-5 grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
                {projects.map((project) => 
                    <ProjectCard key={project.index} project={project}/>
                )}
            </section>
            : <h1>Nothing to see here</h1>}
        </>
    )
}

export default Grid
