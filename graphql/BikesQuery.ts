import gql from 'graphql-tag';

const BIKES_QUERY = gql`
  query Bikes {
    bikes {
      id
      brand
      description
      picture {
        id
        url
        width
        height
      }
    }
  }
`;

export default BIKES_QUERY;
