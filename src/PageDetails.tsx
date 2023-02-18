import { Box, Toolbar, Typography } from '@mui/material'
import NavBar from './components/NavBar'

const DetailsPage = () => {
    return (
        <>
            <NavBar />
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>Joke details</Typography>
            </Box>
        </>
    )
}

export default DetailsPage
