interface RequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: Record<string, string>
    body?: any
}

export const fetchRequest = async (
    url: string,
    options: RequestOptions = { method: 'GET' }
): Promise<Response> => {
    const { method, headers = {}, body } = options

    const fetchOptions: RequestInit = {
        method,
        headers,
        body: JSON.stringify(body),
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        console.error('FETCH_ERROR', response)
        throw new Error(`Request failed with status ${response.status}`)
    }

    return response
}
