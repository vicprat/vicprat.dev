import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  url: 'https://api-us-west-2.hygraph.com/v2/cl91ni7kp27mn01t62jwk4l4y/master',
  cache: new InMemoryCache(),
});

export default client;
