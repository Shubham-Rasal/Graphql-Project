 import { FaEnvelope,FaIdBadge,FaPhone } from "react-icons/fa";

const ClientInfo = ({client}) => {
    console.log(client);
    if(client == null){
        return (<div className="lead">Client Not Assigned.</div>);
    }
  return (
    <>
        <div className="container d-flex row">
    <h5 className="mt-5">Client Information :</h5>
    <ul className="list-group  d-flex ">
        <li className="list-group-item d-flex coloumn p-2 align-items-center">
            <FaIdBadge className="icon m-1" /> 
            <div className="data">

            {client.name}
            </div>
        </li>
        <li className="list-group-item  d-flex coloumn p-2 align-items-center">
            <FaEnvelope className="icon icon m-1" />
            <div className="data">

            {client.email}
            </div>
        </li>
        <li className="list-group-item  d-flex coloumn p-2 align-items-center">
            <FaPhone className=" icon icon m-1" />
            <div className="data">

            {client.phone}
            </div>
        </li>

    </ul>
    </div>

    </>
  )
}

export default ClientInfo