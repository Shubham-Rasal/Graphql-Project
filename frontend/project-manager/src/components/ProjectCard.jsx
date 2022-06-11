import { Link } from "react-router-dom"

const ProjectCard = ({ project }) => {
    return (

        <div className="col-md-6">
            <div className="card mb-3 ">

                <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">

                        <p className="small">
                        Status : 
                            <strong>
                            {project.status}
                            </strong>
                        </p>
                        <button className=" btn btn-warning " >
                            <Link className="text-dark fw-bold" to={`/project/${project.id}`} style={{textDecoration:"none"}} >
                              View
                            </Link>
                        </button>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default ProjectCard