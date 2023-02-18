import { Box, Toolbar, Typography } from '@mui/material'
import NavBar from './components/NavBar'

const SearchPage = () => {
    return (
        <>
            <NavBar />
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>Search Bar</Typography>
            </Box>
        </>
    )
}

export default SearchPage
