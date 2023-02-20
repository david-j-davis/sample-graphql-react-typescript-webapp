import { fetchRequest } from '../utils/fetch'

interface Joke {
    id: string
    joke: string
}

interface SearchResponse {
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

const handleFetchPages = async (
    searchTerm: string,
    page: number
): Promise<SearchResponse> => {
    try {
        const response = await fetchRequest(
            `https://icanhazdadjoke.com/search?term=${searchTerm}&page=${page}`,
            { method: 'GET', headers: { Accept: 'application/json' } }
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.error('FETCH_PAGES_ERROR', error)
        return { status: 500, error } as SearchError
    }
}

export default handleFetchPages
