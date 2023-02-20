import { fetchRequest } from '../utils/fetch'
import handleFetchPages from './handleFetchPages'

export interface SearchOptions {
    searchTerm: string
    limit?: number
}

export interface Joke {
    id: string
    joke: string
}

export interface SearchResponse {
    current_page: number
    limit: number
    next_page: number
    previous_page: number
    results: Array<Joke>
    search_term: string
    total_jokes: number
    total_pages: number
    status: number
}

interface SearchError extends SearchResponse {
    error: string
}

const handleSearchTerm = async (
    options: SearchOptions
): Promise<SearchResponse> => {
    const { searchTerm, limit = 20 } = options
    try {
        const response = await fetchRequest(
            `https://icanhazdadjoke.com/search?term=${searchTerm}&limit=${limit}`,
            { method: 'GET', headers: { Accept: 'application/json' } }
        )
        const data = await response.json()

        if (data.total_jokes > limit) {
            const pages = data?.total_pages || 1
            for (let i = 2; i <= pages; i++) {
                const pageData = await handleFetchPages(searchTerm, i)
                data.results = data.results.concat(pageData.results)
            }
        }
        return data
    } catch (error) {
        console.error('SEARCH_ERROR', error)
        return { status: 500, error } as SearchError
    }
}

export default handleSearchTerm
