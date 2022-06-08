// const { projects, clients } = require('./sampleData');


const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');


//Importing database models

const Project = require('../models/Project');
const Client = require('../models/Client');



//These are user defined data variables

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client:{
            type:ClientType,
            resolve(parent, args){
                return clients.find(client => client.id === parent.clientId);
                
            }
        }
    })
});

//This is the only one query which will be used to access data 

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find();
            },

        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findByID(args.id);
            }
        },

        project: {
                type: ProjectType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args) {
                    return Project.findByID(args.id);
                }
            },
        projects: {
                type: new GraphQLList(ProjectType),
                resolve(parent, args) {
                    return Project.find();
                }
        }
        }
    }

);


module.exports = new GraphQLSchema({
    query: RootQuery

})