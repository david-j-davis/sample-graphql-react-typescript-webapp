import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createClient, Provider } from 'urql'
import HomePage from './PageHome'
import SearchPage from './PageSearch'
import ErrorPage from './PageError'
import DetailsPage from './PageDetails'

const client = createClient({
    url: 'https://icanhazdadjoke.com/graphql',
    fetchOptions: {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    },
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'search',
        element: <SearchPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'details/:jokeId',
        element: <DetailsPage />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider value={client}>
        <RouterProvider router={router} />
    </Provider>
)
