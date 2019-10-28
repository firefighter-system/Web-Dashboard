const { ApolloServer, ApolloError, ValidationError, gql } = require('apollo-server');
var admin = require("firebase-admin");
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const typeDefs = gql `
  # A Twitter User
  type User {
    id: ID!
    name: String!
    screenName: String!
    statusesCount: Int!
    tweets: [Tweets]!
  }
  # A Tweet Object
  type Tweets {
    id: ID!
    text: String!
    userId: String!
    user: User!
    likes: Int!
  }
  type Query {
    tweets: [Tweets]
    user(id: String!): User
  }
`;
const resolvers = {
    Query: {
        async tweets() {
            const tweets = await admin
                .firestore()
                .collection('tweets')
                .get();
            return tweets.docs.map(tweet => tweet.data());
        },
        async user(_, args) {
            try {
                const userDoc = await admin
                    .firestore()
                    .doc(`users/${args.id}`)
                    .get();
                const user = userDoc.data();
                return user || new ValidationError('User ID not found');
            }
            catch (error) {
                throw new ApolloError(error);
            }
        }
    },
    User: {
        async tweets(user) {
            try {
                const userTweets = await admin
                    .firestore()
                    .collection('tweets')
                    .where('userId', '==', user.id)
                    .get();
                return userTweets.docs.map(tweet => tweet.data());
            }
            catch (error) {
                throw new ApolloError(error);
            }
        }
    },
    Tweets: {
        async user(tweet) {
            try {
                const tweetAuthor = await admin
                    .firestore()
                    .doc(`users/${tweet.userId}`)
                    .get();
                return tweetAuthor.data();
            }
            catch (error) {
                throw new ApolloError(error);
            }
        }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: {
        apiKey: "<APOLLO ENGINE API KEY HERE>"
    },
    introspection: true
});
server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map