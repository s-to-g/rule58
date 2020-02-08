import gql from 'graphql-tag';

const ACCESSORIES_QUERY = gql`
  query Accessories {
    accessories {
      id
      brand
      picture {
        id
        url
      }
    }
  }
`;

export default ACCESSORIES_QUERY;
