import gql from 'graphql-tag';

const APPARELS_QUERY = gql`
  query Apparels {
    apparels {
      id
      brand
      picture {
        id
        url
        width
        height
      }
    }
  }
`;

export default APPARELS_QUERY;
