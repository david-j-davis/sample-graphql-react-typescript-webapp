import { useRouteError } from 'react-router-dom'
import { Box, Toolbar, Grid } from '@mui/material'
import NavBar from './components/NavBar'
import Image from './assets/404.webp'

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
                <Grid container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <img
                            src={Image}
                            alt="Oops, sorry the page is not found"
                            width={1000}
                        />
                        <small>
                            <a href="https://www.freepik.com/free-vector/404-error-lost-space-concept-illustration_20602744.htm#query=404&position=12&from_view=keyword&track=sph">
                                Image by storyset
                            </a>{' '}
                            on Freepik
                        </small>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
