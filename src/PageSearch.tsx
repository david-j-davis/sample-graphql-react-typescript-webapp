import React, { useState } from 'react'
import { Box, Toolbar, Button, InputLabel, FormGroup } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import NavBar from './components/NavBar'
import JokeCard from './components/JokeCard'
import NoJokes from './components/NoJokes'
import handleSearchTerm, { Joke } from './handlers/handleSearchTerm'
import './PageSearch.css'

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [jokeResults, setJokeResults] = useState<Joke[]>([])
    const [noResults, setNoResults] = useState<boolean>(false)
    const [noSearchTerm, setNoSearchTerm] = useState<boolean>(false)

    const handleSearch = async (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        !searchTerm ? setNoSearchTerm(true) : setNoSearchTerm(false)
        if (!searchTerm) return
        const data = await handleSearchTerm({ searchTerm })
        setJokeResults(data?.results)
        setNoResults(data?.total_jokes === 0)
    }

    return (
        <>
            <NavBar />
            <Box className="search-page" component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Box className="search-container">
                    <Box className="search-outer-wrapper">
                        <form className="search-form" onSubmit={handleSearch}>
                            <Box className="search-wrapper">
                                <Button
                                    className="search-btn"
                                    onClick={handleSearch}
                                >
                                    <SearchIcon />
                                </Button>
                            </Box>
                            <FormGroup className="search-group">
                                <InputBase
                                    className="search-input"
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    autoFocus
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </FormGroup>
                        </form>
                        {noSearchTerm && (
                            <InputLabel className="search-input-label">
                                Please Enter a search term
                            </InputLabel>
                        )}
                    </Box>
                </Box>
            </Box>
            <Box className="search-results">
                {jokeResults &&
                    jokeResults.map(({ id, joke }) => (
                        <JokeCard joke={joke} shareId={id} />
                    ))}
                {noResults && <NoJokes />}
            </Box>
        </>
    )
}

export default SearchPage
