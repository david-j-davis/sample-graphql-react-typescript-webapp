import { useRouteError } from 'react-router-dom'
import { Box, Toolbar, Typography } from '@mui/material'
import NavBar from './components/NavBar'

interface CustomError extends Error {
    statusText: string
    message: string
}

export default function ErrorPage() {
    const error = useRouteError() as CustomError
    error && console.error(error)

    return (
        <>
            <NavBar />
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                </Typography>
            </Box>
        </>
    )
}
