
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT, } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

const ClientRow = ({ client }) => {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        // refetchQueries: [{ query: GET_CLIENTS }],
        update(cache, { data: { deleteClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS })
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: clients.filter(client => client.id !== deleteClient.id) }
            });
        }


    });
    return (
        <tr>
            <td colSpan="1" >{client.name}</td>
            <td colSpan="1">{client.email}</td>
            <td colSpan="1">{client.phone}</td>
            <td colSpan="1">
                <button className='btn btn-danger' onClick={deleteClient}>
                    <FaTrash />
                </button>
            </td>

        </tr>
    )
}

export default ClientRow;
