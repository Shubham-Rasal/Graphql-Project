import { useMutation } from "@apollo/client";
import { FaList } from "react-icons/fa";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
const AddProjectModal = () => {

    const [projectname, setProjectname] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('new');
    const [clientId, setClientId] = useState('');


   
    const [addProject] = useMutation(ADD_PROJECT, {
        variables: {
            name: projectname,
            description: description,
            status: status,
            clientId: clientId
        },
        update(cache, { data: { addProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, addProject] }
            });
        }


    });

    const { data, error, loading } = useQuery(GET_CLIENTS);

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading</div>;



     
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectname, description, status, clientId);
        if (projectname !== '' && description !== '' && clientId !== '') {

            addProject(projectname, description, status, clientId);
        }
        else {
            alert('Please fill all the fields');
        }
    }


    return (
        <>
            <div className="container">


                <button type="button" className="btn btn-dark text-warning align-items-center" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                    <FaList />  Add Project
                </button>


                <div className="modal fade" id="addProjectModal" aria-labelledby="projectModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="projectModalLabel">New Project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="projectName">Project Name</label>
                                    <input type="text" className="form-control" id="projectName" placeholder="Project Name" onChange={(e) => setProjectname(e.target.value)} />
                                    <label htmlFor="projectDescription">Project Description</label>
                                    <textarea className="form-control" id="projectDescription" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    <label htmlFor="projectStatus">Project Status</label>
                                    <select className="form-control" id="projectStatus" onChange={(e) => setStatus(e.target.value)}>

                                        <option value="new">Not Started</option>
                                        <option value="progress">In Progress</option>
                                        <option value="completed" >Completed</option>
                                    </select>
                                    <label htmlFor="projectClient">Project Client</label>
                                    <select className="form-control mb-3" id="projectClient" onChange={(e) => setClientId(e.target.value)}>
                                        <option value=''>Select Client</option>
                                        {data.clients.map(client => (
                                            <option key={client.id} value={client.id}>{client.name}</option>
                                        ))}
                                    </select>

                                    <button className="btn btn-outline-warning" onClick={handleSubmit} >Submit</button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProjectModal