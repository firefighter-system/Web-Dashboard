import { gql }from "graphql-server-express"; 

export const typeDefs = gql`
  type Hotdog {
    isKosher: Boolean
    location: String
    name: String
    style: String
    website: String
  }
  type Query {
    hotdogs: [Hotdog]
  }
  `; 


  export const resolvers = {
    Query: {
      hotdogs: () =>
        admin
          .database()
          .ref("hotdogs")
          .once("value")
          .then(snap => snap.val())
          .then(val => Object.keys(val).map(key => val[key]))
    }
  };


  