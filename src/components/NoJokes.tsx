import { Box, Toolbar, Grid, Typography } from '@mui/material'
import NavBar from './NavBar'
import Image from '../assets/no-jokes.webp'

const NoJokes = () => {
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
                        <Typography variant="h4" component="h1" gutterBottom>
                            Well this is akward, guess we ran out of jokes...
                        </Typography>
                        <img
                            src={Image}
                            alt="Oops, sorry we ran out of jokes"
                            width={1000}
                        />
                        <small>
                            <a href="https://www.freepik.com/free-vector/curiosity-people-concept-illustration_30576696.htm">
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

export default NoJokes
