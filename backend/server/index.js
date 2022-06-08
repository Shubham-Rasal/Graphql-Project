const express = require('express');

require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const connectDB = require('./config/db');
const port = process.env.PORT||5000;


const app = express();




// console.log(require('dotenv').config())

//Connect to db

connectDB();



app.use(cors());


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === "dev",
}) )


app.listen(port, ()=> console.log(`Listening at ${port}`));