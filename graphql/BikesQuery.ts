import gql from 'graphql-tag';

const BIKES_QUERY = gql`
  query Bikes {
    bikes {
      id
      brand
      image {
        id
        url
      }
    }
  }
`;

export default BIKES_QUERY;
