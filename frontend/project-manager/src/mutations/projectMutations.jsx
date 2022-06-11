import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
    mutation AddProject($name: String!, $clientId: ID!, $description: String!, $status: ProjectStatus!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            name
            description
            status,
            client{

                name
                email
                id
            }
        }
    }
`;


export { ADD_PROJECT };                             