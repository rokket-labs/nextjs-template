import { gql } from 'graphql-request'

const queryRickAndMortyCharacters = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        name
        status
        species
        gender
        image
      }
    }
  }
`

export { queryRickAndMortyCharacters }
