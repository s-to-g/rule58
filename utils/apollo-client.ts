import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import {createHttpLink} from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import {ENDPOINT} from 'config/secrets';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: ENDPOINT,
});

export default withApollo(
  ({initialState}) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
);
