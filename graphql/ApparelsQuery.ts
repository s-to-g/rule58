import gql from 'graphql-tag';

const APPARELS_QUERY = gql`
  query Apparels {
    apparels {
      id
      brand
      image {
        id
        url
      }
    }
  }
`;

export default APPARELS_QUERY;
