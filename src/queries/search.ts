import { gql } from 'urql'

const SEARCH_QUERY = `
        query SearchJoke ($query: String, $id: ID) {
            joke(query: $query, id: $id) {
                id
                joke
                permalink
            }
        }
    `

export default SEARCH_QUERY
