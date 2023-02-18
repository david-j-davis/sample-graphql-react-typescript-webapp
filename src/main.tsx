import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './PageHome'
import SearchPage from './PageSearch'
import ErrorPage from './PageError'
import DetailsPage from './PageDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'search',
        element: <SearchPage />,
    },
    {
        path: 'details/:jokeId',
        element: <DetailsPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
