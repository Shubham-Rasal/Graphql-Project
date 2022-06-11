
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../Queries/projectQueries"
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS);
    console.log(data);
    if (loading) return (
        <div className="d-flex spinner-border text-dark" role="status">
            <span className="visually-hidden"></span>
        </div>
    )
    if (error) return (<h1>Something went Wrong</h1>);


    return (
        <>

            {(data.projects.length <= 0) ? <h2>No Projects</h2> :

                <div className="row mt-4 ">

                    {data.projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            }
        </>
    )
}

export default Projects