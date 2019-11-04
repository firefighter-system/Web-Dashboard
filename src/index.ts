const express = require("express"); 

const { ApolloServer, ApolloError, ValidationError, gql } = require('apollo-server-express'); 
const serviceAccount = require('../serviceAccountKey.json');

const functions = require("firebase-functions"); 

var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firefightingmonitoringsystem.firebaseio.com"
});

interface PiData {
  id: string; 
  timeStamp: TimeStamp;
}

interface TimeStamp {
  id: string; 
  timeStamp: string; 
  users: [User]; 
}

interface User {
  id: string; 
  userData: UserData;
}

interface UserData {
  id: string; 
  chestTemperature: number; 
  externalTemperature: number; 
  heartbeat: number; 
  humidity: number; 
}

const typeDefs = gql`
  type PiData {
    id: String!
    timeStamp: TimeStamp
  }

  # Generated Data 
    type TimeStamp {
      id: ID!
      timeStamp: String!
      users: [UserData]
    }

  # A User 
    type User {
      id: ID!
      userData: UserData
    }

  # A UserData 
    type UserData {
      id: ID!
      chestTemperature: Int!
      externalTemperature: Int!
      heartbeat: Int!
      humidity: Int!
    }

    type Query {
      users: [User]
      usersData: [UserData]
      piData: [TimeStamp]
    }
`; 

const resolvers = {
    Query: {
      piData: () =>
      admin.database()
        .ref("piData")
        .once("value")
        .then(snap => snap.val())  
        .then(val => Object.keys(val).map(key => val[key]))
    }
  };

  
  
  const server = new ApolloServer({ typeDefs, resolvers }); 

  const app = express(); 
  server.applyMiddleware({ app });

  app.listen({ port: 5000 }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);