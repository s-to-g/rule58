import gql from 'graphql-tag';

const ACCESSORIES_QUERY = gql`
  query Accessories {
    accessories {
      id
      brand
      image {
        id
        url
      }
    }
  }
`;

export default ACCESSORIES_QUERY;
