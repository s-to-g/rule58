import gql from 'graphql-tag';

const EVENTS_QUERY = gql`
  query Bikes {
    events {
      id
      title
      date
      image {
        id
        url
      }
    }
  }
`;

export default EVENTS_QUERY;
