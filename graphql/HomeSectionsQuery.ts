import gql from 'graphql-tag';

const HOME_SECTIONS_QUERY = gql`
  query homeSections {
    homeSections {
      title
      description
      picture {
        url
        width
        height
      }
    }
  }
`;

export default HOME_SECTIONS_QUERY;
