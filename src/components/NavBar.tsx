import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Toolbar,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material'
import './NavBar.css'

interface Props {
    isLoading?: boolean
}

const drawerWidth = 240

const NavBar = ({ isLoading }: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box
            className="navbar-mobile"
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <Typography component="h1" variant="h6" sx={{ my: 2 }}>
                Dad Jokes - david-j-davis
            </Typography>
            {isLoading && <CircularProgress color="secondary" />}
            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link to="/">Home</Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <Link to="/search">Search</Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Box className="navbar-desktop" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        Dad Jokes - david-j-davis
                    </Typography>
                    {isLoading && <CircularProgress color="secondary" />}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button>
                            <Link to="/search">Search</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default NavBar
