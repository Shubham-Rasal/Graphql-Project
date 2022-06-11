import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation AddProject( $clientId: ID!,$name: String!, $description: String!, $status: ProjectStatus!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            name
            description
            status,
            id,
            client{

                name
                email
                id
            }
        }
    }
`;

const UPDATE_PROJECT = gql`
    mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: ProjectStatusUpdate!) {
        updateProject(id: $id, name: $name, description: $description, status: $status) {
            name
            description

            status,
            id
            
        }
    }
`;



const DELETE_PROJECT = gql`

    mutation DeleteProject($id: ID!) {
        delProject(id: $id) {
            id
           
        }
    }
`;


export { ADD_PROJECT , DELETE_PROJECT , UPDATE_PROJECT   };                             