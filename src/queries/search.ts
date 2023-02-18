import { graphql } from '../gql'

const SEARCH_QUERY = graphql(
    `
        query SearchQuery($query: String) {
            joke(query: $query) {
                id
                joke
                permalink
            }
        }
    `
)

export default SEARCH_QUERY
