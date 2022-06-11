import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT  } from '../mutations/projectMutations';
import { GET_PROJECT } from '../queries/projectQueries';
import {useState} from 'react';                                     


const UpdateProjectButton = ({ project }) => {
    console.log(project);

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState('new');

    
    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: {
            id: project.id,
            name,
            description,
            status,


        },
        refetchQueries: [{ query: GET_PROJECT , variables: { id: project.id } }]
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, description, status);
        if (name !== '' && description !== '' && status !== '') {

            updateProject(name, description, status);
        }
        else {
            alert('Please fill all the fields');
        }
    }


    return (

        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editProjectModal">
                Edit Project
            </button>


            <div className="modal fade" id="editProjectModal"  aria-labelledby="editProjectModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editProjectModalLabel">Edit Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="projectName">Project Name</label>
                            <input type="text" className="form-control" id="projectName" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="projectDescription">Project Description</label>
                            <textarea className="form-control" id="projectDescription" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <label htmlFor="projectStatus">Project Status</label>
                            <select className="form-control" id="projectStatus" onChange={(e) => setStatus(e.target.value)}>

                                <option value="new">Not Started</option>
                                <option value="progress">In Progress</option>
                                <option value="completed" >Completed</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdateProjectButton