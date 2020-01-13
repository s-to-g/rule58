import gql from 'graphql-tag'

const BIKES_QUERY = gql`
query Bikes {
  bikes {
    title
  }
}
`

export default BIKES_QUERY