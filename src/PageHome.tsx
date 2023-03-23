import { useQuery } from 'urql'
import NavBar from './components/NavBar'
import SEARCH_QUERY from './queries/search'
import { Joke, Query, QueryJokeArgs } from './gql/graphql'
import { Box, Toolbar, Grid } from '@mui/material'
import NoJokes from './components/NoJokes'
import JokeCard from './components/JokeCard'
import Image from './assets/dads-joking.webp'

const HomePage = () => {
    const [result, reexecuteQuery] = useQuery<Query, QueryJokeArgs>({
        query: SEARCH_QUERY,
    })
    const { data, fetching } = result

    if (fetching) return <NavBar isLoading={true} />

    const { joke = '', id } = (data?.joke as Joke) || ''

    return (
        <>
            <NavBar />
            {joke && (
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
                            <JokeCard
                                joke={joke}
                                image={Image}
                                copyToClipboard={false}
                                maxWidth={900}
                                minHeight={'75vh'}
                                shareId={id}
                            />
                        </Grid>
                    </Grid>
                </Box>
            )}
            {!joke && <NoJokes />}
        </>
    )
}

export default HomePage
