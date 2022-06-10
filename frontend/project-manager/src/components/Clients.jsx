import {gql,useQuery} from '@apollo/client'


const GET_CLIENTS = gql`
query getClients {
  clients{
    name,
    id
  }
}
`;

const Clients = () => {

    const {loading,error,data} = useQuery(GET_CLIENTS);

    if(loading) return(<h1>Loading ...</h1>)
    if(error) return(<h1>Something went Wrong</h1>)
    

    console.log(data);


  return (
    <div>clients</div>
  )
}

export default Clients