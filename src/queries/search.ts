import { gql } from 'urql'

const SEARCH_QUERY = 
    `
        query SearchQuery($query: String) {
            joke(query: $query) {
                id
                joke
                permalink
            }
        }
    `


export default SEARCH_QUERY
