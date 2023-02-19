import { useQuery } from 'urql';
import { useParams } from 'react-router-dom';
import { decode } from 'js-base64';
import { Box, Toolbar, Grid } from '@mui/material'
import { Joke, Query, QueryJokeArgs } from './gql/graphql'
import NoJokes from './components/NoJokes';
import SEARCH_QUERY from './queries/search'
import NavBar from './components/NavBar'
import JokeCard from './components/JokeCard';

interface RouteParams extends Record<string, string | undefined> {
    jokeId: string;
}

const DetailsPage = () => {
    const { jokeId } = useParams<RouteParams>();
    // @ts-ignore
    const decodedId = decode(jokeId);
    const [result, reexecuteQuery] = useQuery<Query, QueryJokeArgs>({ query: SEARCH_QUERY, variables: { query: decodedId } });
    const { data, fetching } = result;

    if (fetching) return <NavBar isLoading={true} />;
    
    const { joke } = data?.joke as Joke || '';

    return (
        <>
            <NavBar />
            {joke && 
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Grid container spacing={3}>
                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <JokeCard joke={joke} copyToClipboard={true} maxWidth={900} minHeight={100} />
                    </Grid>
                 </Grid>
                
            </Box>
            }
            {!joke && <NoJokes />}
        </>
    )
}

export default DetailsPage
