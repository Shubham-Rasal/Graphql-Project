import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';




const AddClientModal = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {
            name,
            email,
            phone
           
        },
        update(cache,{data:{addClient}}) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS })
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            });
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(name === ''|| email === '' || phone === '') {
            return alert("Fill all the fields");
        }

        addClient(name,email,phone);
        
        console.log(name, email, phone);
    }


    return (
        <>
            <div className='container'>
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addClientModal">
                   <FaUser/> Add Client
                </button>

                <div className="modal fade" id="addClientModal" aria-labelledby="addClientModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addClientModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="addClientInputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="addClientInputName" aria-describedby="NAME" onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="addClientInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="addClientInputEmail1" aria-describedby="emailHelp" onChange = {(e)=>setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="addClientInputPhone" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="addClientInputPhone" aria-describedby="phone" onChange = {(e)=>setPhone(e.target.value)}/>
                                    </div>

                                    
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClientModal