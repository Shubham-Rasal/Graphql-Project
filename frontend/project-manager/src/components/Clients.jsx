import {  useQuery } from '@apollo/client'
import ClientRow from './ClientRow'

import { GET_CLIENTS } from '../Queries/clientQueries';



const Clients = () => {

    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return (
    <div className="d-flex spinner-border text-dark" role="status">
        <span className="visually-hidden"></span>
    </div>
    )
    if (error) return (<h1>Something went Wrong</h1>)


    // console.log(data);


    return (
        <div className='container row '>
            <h3>Clients</h3>

            <table className='table table-striped ' >
                <thead>
                    <tr>
                        <th colSpan="1" >Name</th>
                        <th colSpan="1">Email</th>
                        <th colSpan="1">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.clients.map(client => (
                        <ClientRow key={client.id} client={client} />

                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Clients