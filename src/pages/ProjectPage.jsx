import userEvent from '@testing-library/user-event';
import { useState, useContext } from 'react'

import { useLocation, useParams } from "react-router"
import DashboardHeading from "../components/DashboardHeading";

import DashboardContext from "../state/projects-context";


const ProjectPage = ({index}) => {
    const params = useParams();
    const location = useLocation()
    console.log(location)
    console.log(params)
    const context = useContext(DashboardContext)
    // const projects = context.state
    const initialState = context.state
    const [project, setProject] = useState(initialState)
    const [searchTerm, setSearchTerm] = useState("")

    const updateState = () => {
        console.log('clicked')
        context.setState({test: 'testing'})
    }


    return (
        <>
            <DashboardHeading heading={params.projectIndex} searchTerm={searchTerm} update={setSearchTerm} />
            <div>
                The project number should be here ---- {params.projectIndex}

                <button onClick={() => updateState()}>Set new globalstate</button>
            </div>
        </>
    )
}

export default ProjectPage
