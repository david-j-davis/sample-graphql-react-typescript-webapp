import {
    jest,
    describe,
    expect,
    it,
    beforeAll,
    afterEach,
    afterAll,
} from '@jest/globals'

import handleSearchTerm, { SearchResponse } from '../handlers/handleSearchTerm'

describe('handleSearchTerm function', () => {
    const mockData: SearchResponse = {
        current_page: 1,
        limit: 20,
        next_page: 2,
        previous_page: 0,
        results: [
            {
                id: 'abc123',
                joke: 'How much does a hipster weigh? An instagram.',
            },
            {
                id: 'def456',
                joke: 'How did the hipster burn the roof of his mouth? He ate the pizza before it was cool.',
            },
        ],
        search_term: 'joke',
        total_jokes: 2,
        total_pages: 1,
        status: 200,
    }

    const mockFetchRequest = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(JSON.stringify(mockData) as never),
    })
    const mockHandleFetchPages = jest
        .fn()
        .mockResolvedValue(JSON.stringify(mockData) as never)

    beforeAll(() => {
        jest.mock('../utils/fetch', () => {
            return {
                fetchRequest: mockFetchRequest,
            }
        })
        jest.mock('../handlers/handleFetchPages', () => {
            return mockHandleFetchPages
        })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    afterAll(() => {
        jest.unmock('../utils/fetch')
        jest.unmock('../handlers/handleFetchPages')
    })

    it('should return search results and handle pagination if needed', async () => {
        const options = { searchTerm: 'joke', limit: 20 }
        const response = await handleSearchTerm(options)

        expect(response).toEqual(mockData)
        expect(mockFetchRequest).toHaveBeenCalledWith(
            `https://icanhazdadjoke.com/search?term=${options.searchTerm}&limit=${options.limit}`,
            { method: 'GET', headers: { Accept: 'application/json' } }
        )
        expect(mockHandleFetchPages).not.toHaveBeenCalled()
    })

    it('should return search results and handle pagination if there are more results than the limit', async () => {
        const options = { searchTerm: 'joke', limit: 1 }
        const response = await handleSearchTerm(options)

        expect(response).toEqual(mockData)
        expect(mockFetchRequest).toHaveBeenCalledWith(
            `https://icanhazdadjoke.com/search?term=${options.searchTerm}&limit=${options.limit}`,
            { method: 'GET', headers: { Accept: 'application/json' } }
        )
        expect(mockHandleFetchPages).toHaveBeenCalledTimes(1)
        expect(mockHandleFetchPages).toHaveBeenCalledWith('joke', 2)
    })
})
