// // const { ApolloServer, ApolloError, ValidationError, gql } = require('apollo-server'); 

// var admin = require("firebase-admin");
// // const serviceAccount = require('../serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// interface GeneratedData {
//   id: string; 

//   timeStamp: TimeStamp;
// }

// interface TimeStamp {
//   id: string; 

//   //ID and timeStamp data == ? 
//   timeStamp: string; 
//   users: [User]; 
// }

// interface User {
//   id: string; 

//   userData: UserData;
// }

// interface UserData {
//   id: string; 

//   chestTemperature: number; 
//   externalTemperature: number; 
//   //TODO: change the heartbeat to heartRate
//   heartbeat: number; 
//   humidity: number; 
// }

// const typeDefs = gql`
//   # A TimeStamp 
//     type TimeStamp {
//       id: ID!

//       timestamp: String!
//       users: [UserData]
//     }

//   # A User 
//     type User {
//       id: ID!
//       userData: UserData
//     }
//   # A UserData 
//     type UserData {
//       id: ID!

//       chestTemperature: Int!
//       externalTemperature: Int!
//       heartbeat: Int!
//       humidity: Int!
//     }
// `; 


// const resolvers = {
//   Query: {
    
//   }


// }