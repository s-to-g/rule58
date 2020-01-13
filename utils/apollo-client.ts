import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import {createHttpLink} from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const GRAPHQL_URL =
  'https://api-euwest.graphcms.com/v1/ck4h3llxk0t7p01hfc6fd48rc/master'

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
})

export default withApollo(
  ({initialState}) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    }),
)
