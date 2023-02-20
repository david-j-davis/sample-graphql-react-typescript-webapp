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

const handleFetchPages = async (
    searchTerm: string,
    page: number
): Promise<SearchResponse> => {
    const response = await fetchRequest(
        `https://icanhazdadjoke.com/search?term=${searchTerm}&page=${page}`,
        { method: 'GET', headers: { Accept: 'application/json' } }
    )
    const data = await response.json()
    return data
}

export default handleFetchPages
