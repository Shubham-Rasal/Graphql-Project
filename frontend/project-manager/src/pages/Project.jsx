import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../Queries/projectQueries'
import ClientInfo from '../components/ClientInfo'

const Project = () => {


    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_PROJECT, {
        variables: { id },

    });

    if (loading) return (
        <div className="d-flex spinner-border text-dark" role="status">
            <span className="visually-hidden"></span>
        </div>
    );
    if (error) return (<h1>Something went Wrong</h1>);
  console.log(data);

    const project = data.project;
    console.log(project.status);
    //    project.status == 'In Progress' ? setStatusClass('text-warning') : setStatusClass('text-success');
    //          console.log(project.status == 'In Progress');



    return (
        <>
            <div className="container">
                {!loading && !error && (
                    <div className="mx-auto w-75 p-5 card mb-3" key={project.id}>
                        <h5 className="card-title">{project.name}</h5>
                        <div className="card-body">
                            <p className="card-text">
                                {project.description}
                            </p>

                            <div className="lead">Status: <br />
                                <strong className={project.status == "In Progress" ? "text-warning" : project.status == "Completed" ? "text-success" : "text-danger"}>{project.status}</strong>
                            </div>

                            <ClientInfo client={project.client} />


                        </div>

                        <Link className='btn btn-sm w-25 btn-warning' to={'/'}>Back</Link>


                    </div>
                )}
            </div>
        </>
    )
}

export default Project