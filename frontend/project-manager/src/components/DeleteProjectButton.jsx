import {useNavigate} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'




const DeleteProjectButton = ({projectId}) => {
    

    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
    
    });

    return (

        <>
            <button className="btn btn-danger m-2" onClick={deleteProject}>
                Delete
            </button>
        </>
    )
}

export default DeleteProjectButton