import React, { useContext } from 'react'
import ProjectCard from './ProjectCard'
import DashboardHeading from './DashboardHeading'
import DashboardContext from '../state/projects-context'

function Grid() {

    const context = useContext(DashboardContext)
    const projects = context.state

    return (
        <>
            <DashboardHeading heading={"Available Projects"} />
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
