
const {  gql } = require("apollo-server-express");
import { PubSub } from 'graphql-subscriptions';

import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';

const WS_PORT = 5000;

const schema = gql`
  type PiData {
    users: [User] 
  }

  type User {
    id: String!
    chestTemperature: [RTData]
    externalTemperature: [RTData]
    heartRate: [RTData]
    humidity: [RTData]
  }

  type RTData {
    time: String!
    value: Int!
  }

  type Subscription {
    piData: [User]
  }
`; 

const PI_DATA = "piData"; 

const resolvers = {
  Subscription: {
    piData: {
      subscribe: (_, __, {pubsub}) => pubsub.asyncIterator(PI_DATA)
    }
  }
}

const pubsub = new PubSub(); 

// Create WebSocket listener server
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

// Bind it to port and start listening
websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));

const subscriptionServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: websocketServer,
    path: '/graphql',
  },
);
