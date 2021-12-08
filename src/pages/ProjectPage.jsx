import { useLocation, useParams } from "react-router"


const ProjectPage = ({index}) => {
    const params = useParams();
    const location = useLocation()
    console.log(location)
    return (
        <div>
            The project number should be here ---- {params.projectIndex}
        </div>
    )
}

export default ProjectPage
